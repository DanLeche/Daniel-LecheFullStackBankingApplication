function Withdraw(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="success"
      header="Withdraw"
      status={status}
      body={show ? 
        <WithdrawForm setShow={setShow} setStatus={setStatus}/> :
        <WithdrawMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )
}

function WithdrawMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
        Withdraw again
    </button>
  </>);
}

function WithdrawForm(props){
  const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState('');
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

  fetch(`/account/findOne/${email}`)
      .then(user => user.text())
      .then(text => {
          try {
              const data = JSON.parse(text);
              setBalance(Number(data.balance));
          } catch(err) {
              console.log('err:', text);
          }
      });
    
  console.log(balance);

  function handle(){  
    if(Number(balance) - amount < 0){
      props.setStatus('Withdrawal failed. Withdrawal amount is over the balance amount')
    } else {
      fetch(`/account/update/${email}/-${amount}`)
        .then(response => response.text())
        .then(text => {
            try {
                const data = JSON.parse(text);
                props.setStatus('Current balance: ' + JSON.stringify(data.value.balance));
                props.setShow(false);
                console.log('JSON:', data);
            } catch(err) {
                props.setStatus('Withdraw failed')
                console.log('err:', text);
            }
        });
    }
    
  }


  return(<>

    {/* Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/> */}

    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} 
      onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
        Withdraw
    </button>

  </>);
}
