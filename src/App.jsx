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
import Footer from "./components/Footer";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";


const promise=loadStripe('pk_test_51ONwcuDuF4e9ixnRIDcgidFwlz7jUo7NVeAp7PNVUhzAXWIkXrPT02aNNRpo8y7F3onD4pD997zkX6UD1Ja95yBy00ij4KjpSD');

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

           <Route path="/" element={<> <Header/> <Home/> <Footer/> </>}/> 

           <Route path="/login" element={<Login />} />

           <Route path='/payment' element={<> <Header/> 
            <Elements stripe={promise}>
               <Payment/> 
            </Elements>
           </>} />

           <Route path='/orders' element={<> <Header /> <Orders /> </>} />
             
        </Routes>
      
    </Router>

  
  )
}

export default App;