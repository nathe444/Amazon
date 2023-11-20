import React, { useEffect } from "react";
import Header from "./components/Header";
import './components/Css/App.css'
import Home from "./components/Home";
import Checkout from './components/Checkout'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "./components/Login";
import { auth } from "./components/firebase";
import { useStateValue } from "./components/StateProvider";
import { type } from "@testing-library/user-event/dist/type";


function App(){

  const[{user},setUser]=useStateValue();

  console.log(user);

  useEffect(
    ()=>{
      auth.onAuthStateChanged(authUser =>{      
        if(authUser){
          setUser({
            type:'SET_USER',
            user:authUser
          })}

        else{
          setUser({
            type:'SET_USER',
            user:null
          })}
    })}
  ,[])


  return(
    
    <Router>
        <Routes>

           <Route path="/checkout" element={<><Header/> <Checkout/></>} /> 

           <Route path="/" element={<> <Header/> <Home/> </>}/> 

           <Route path="/login" element={<Login />} />
             
        </Routes>
      
    </Router>

  
  )
}

export default App;