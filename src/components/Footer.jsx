import React from "react";
import './Css/Footer.css'

function Footer(){

 const scrollToTop=()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  return(
    <div className='footer'>
      <div className="footer-top">
        <button className='back-button' onClick={scrollToTop}>Back to top</button> 
      </div>

      <div className="footer-bottom">
        <ul className="footer-ul">
          <li>Get to Know Us</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>About Amazon</li>
          <li>Investor Relations</li>
          <li>Amazon Devices</li>
          <li>Amazon Science</li>
        </ul>

        <ul className="footer-ul">
          <li>Make Money with Us</li>

          <li>Sell products on Amazon</li>

          <li>Sell on Amazon Business</li>

          <li>Sell apps on Amazon</li>

          <li>Advertise Your Products</li>

          <li>Self-Publish with Us</li>
        </ul>

        <ul className="footer-ul">
          <li>Amazon Payment Products</li>
          <li>Amazon Business Card</li>
          <li>Shop with Points</li>
          <li>Reload Your Balance</li>
          <li>Amazon Currency Converter</li>
        </ul>

      <ul className="footer-ul">
        <li>Let Us Help You</li>
        <li>Amazon and COVID-19</li>
        <li>Your Account</li>
        <li>Your Orders</li>
        <li>Shipping Rates & Policies</li>
        <li>Help</li>
      </ul>





      </div>

    </div>
  )
}

export default Footer;