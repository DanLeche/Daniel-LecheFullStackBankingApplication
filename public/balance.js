function Balance(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="info"
      header="Balance"
      status={status}
      body={show ?
        <BalanceForm setShow={setShow} setStatus={setStatus}/> :
        <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )

}

function BalanceMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
        Check balance again
    </button>
  </>);
}

function BalanceForm(props){
  const [email, setEmail]   = React.useState('');
  const [balance, setBalance] = React.useState('');
  
  React.useEffect(() => {
    firebase.auth().currentUser.getIdToken()
    .then(idToken => {
      console.log('idToken:', idToken);

      (async () => {
        let res = await fetch('/auth', {
          method: 'GET',
          headers: {
            'Authorization': idToken
          }
        });
        console.log('res:', res)
      })();
    }).catch(e => console.log('e:', e));

    console.log(document.getElementById('name').innerHTML);
    setEmail(document.getElementById('name').innerHTML);
  }, []);

  function handle(){
    fetch(`/account/findOne/${email}`)
    .then(user => user.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus('Current Balance: ' + JSON.stringify(data.balance));
            props.setShow(false);
            setBalance(data.balance);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus('Check Balance failed')
            console.log('err:', text);
        }
    });
  }

  return (<>

    {/* Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/> */}

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
        Check Balance
    </button>

  </>);
}