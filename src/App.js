import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
// import logo from "./logo/R1.png";

function App() {
  const adminUser = {
    email: "samichakroun@medtech.tn",
    password: "admin1234"
  }

  const [user, setUser] = useState({name: "", email: ""});
 

  

  const Logout = () => {
   setUser({ name: "", email:""});
  }

  return (
    <div className="App">
      {(user.email !="") ? (
        <div className="welcome">
          <h2>welcome, <sapn>{user.name}</sapn></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <div className="App">
          <div className="logo-img">
           {/* {<img src={logo} alt="R1" /> } */}
          </div>
          <LoginForm />
        </div>
      )}
        </div>
        );
    }

export default App;
