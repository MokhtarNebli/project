import React, {useState} from 'react';
import { Login } from "../Registration/Login.jsx"
import { Register} from "../Registration/Register.jsx"

function Reegister() {
  const [currentFrom, setCurrentFrom] = useState('login');
  const tooglefrom = (forName) => {
    setCurrentFrom (forName);
  }
  
  return (
    <div>
      {
        currentFrom == "login" ? <Login onFormSwitech={tooglefrom} /> :   <Register />
      }
    
    </div>
  );
}

export default Reegister