import React,{ useState } from "react"

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState(''); 
  const handleSubmit= (e) =>{
    e.preventDefault()
    console.log(email);
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlfor="email">email</label>
      <input
        value={email}
        type="email"
        placeholder="mokhtar@gmail.com"
        id="email"
        name="email"
       />
      <label htmlfor="password">password</label>
      <input
        value={pass}
        type="password"
        placeholder="*******"
        id="password"
        name="password"
      />
      
      <button htmltype="submit">Login</button>
    </form>
    <button>Already have an account? Register here !</button>

    </>
  );
}
