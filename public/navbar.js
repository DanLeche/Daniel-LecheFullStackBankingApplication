function NavBar(){
  const [username, setUsername] = React.useState('');

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      console.log(firebaseUser);
      document.getElementById('logout').style.display = 'inline';
      document.getElementById('login').style.display = 'none';
      document.getElementById('deposit').style.display = 'inline';
      document.getElementById('withdraw').style.display = 'inline';
      document.getElementById('createacc').style.display = 'none';
      document.getElementById('balance').style.display = 'inline';
      document.getElementById('name').style.display = 'inline';
      
      setUsername(firebaseUser.email);
    }
    else{
      console.log('User is not logged in');
      document.getElementById('logout').style.display = 'none';
      document.getElementById('login').style.display = 'inline';
      document.getElementById('deposit').style.display = 'none';
      document.getElementById('withdraw').style.display = 'none';
      document.getElementById('createacc').style.display = 'inline';
      document.getElementById('balance').style.display = 'none';
      document.getElementById('name').style.display = 'none';
      
      setUsername('');
    }
  });

  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li id='createacc' className="nav-item">
            <a className="nav-link" href="#/CreateAccount/">Create Account</a>
          </li>
          <li id='login' className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
          </li>
          <li id='deposit' className="nav-item">
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li>
          <li id='withdraw' className="nav-item">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li>
          <li id='balance' className="nav-item">
            <a className="nav-link" href="#/balance/">Balance</a>
          </li>
          <li id='logout' className="nav-item">
            <a className="nav-link" href="#/logout/">Logout</a>
          </li>          
        </ul>
      </div>
      <h5 id='name' className="navbar-brand my-2 my-lg-0">{username}</h5>
    </nav>

  );
}
