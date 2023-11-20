import React from "react";
import './Css/Header.css'
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";



function Header(){
  
  const [{amount},dispatch]=useStateValue();

  let [{user},setUser]=useStateValue();

  let handleSigning = () =>{
    if(user){
     auth.signOut();
    } 
  }
  

  return(   
    <div className="header" >
 
        <Link to={'/'}>
          <img className="amazon-logo" src="./amazon.png"/>  
        </Link>
              
         <div className="search-container">
            <input type="text" className="input" />

            <button className="search-icon-container" type="submit">
              <img src="./search.svg" alt="" className="search-icon" />
            </button>

          </div>   
     
      
         <Link to={'/login'}>
           <p className="header-p">Hello {user?user?.email:'Guest'} <br /> <span onClick={handleSigning}> {user?'Sign Out':'Sign In'} </span></p>
          </Link>
         
          <p className="header-p">Returns <br /> <span> &Orders </span> </p>

          <p className="header-p">Your <br />  <span> <a href="">Prime</a> </span></p>


          <Link to={'/checkout'}>
            <div className="count-container">

             <img src="./cartt.png" className="cart-icon" alt="" />
           
             <span className="number">{amount}</span>
            </div>
          </Link>  
      
        
    </div>
  )
}

export default Header;