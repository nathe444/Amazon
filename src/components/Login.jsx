import React, { useState } from "react";
import './Css/Login.css';
import { Link , useNavigate} from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function Login(){

  const [user,setUser]=useStateValue();

  const navigate=useNavigate();

  const [state,setState]=useState({
  email:'',
  password:''
  })


function handleChange(event){
  setState((prevValue)=>{
    return{
      ...prevValue,
      [event.target.name]:event.target.value
    }
  })
}

function signIn(event){
  event.preventDefault();

  auth.signInWithEmailAndPassword(state.email,state.password)
    .then((auth => navigate('/')))
    .catch(err => alert(err.message))
}


function register(event){
  event.preventDefault();

  auth.createUserWithEmailAndPassword(state.email,state.password)
    .then((auth)=>{
        if(auth) navigate('/')
         })

    .catch((err)=>{
      alert(err.message);
    })
}


  return(
    <div className="login-main-container">
        
      <Link to={'/'}>
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" className="login-amazon-icon"/>
      </Link>
            
       
      <div className="login-content-container">
        <form>
          <h2 className="sign-in-text">Sign-in</h2>
          <p className="email-password-text">E-mail</p>
          <input className="login-input" type="email"  name="email" onChange={handleChange}/>

          <p className="email-password-text">Password</p>
          <input className="login-input" type="password"  name="password" onChange={handleChange}/>

          <button className="sign-in-btn" type="submit" onClick={signIn}>Sign In</button>

        </form>
         

          <p className="login-terms-services">By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

          <button className="create-accouont-btn" onClick={register}>Create Your Amazon Account</button>

        </div>
     
    </div>
  )
}

export default Login;