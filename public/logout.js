function Logout(){
    return (
        <Card 
            bgcolor="primary"
            header="Logout"
            body={<LogoutBtn/>}
        />
    )
}

function LogoutBtn(){
    return(<>
        <h5>Do you want to Log Out?</h5>
        <button type="submit" 
          className="btn btn-light" 
          onClick={() => {
            firebase.auth().signOut();
            window.location.href = '/';
            } }>
          Log Out</button>
      </>);
}