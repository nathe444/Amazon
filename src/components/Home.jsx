import React from "react";
import './Css/Home.css';
import Product from "./Product";

function Home(){
  return(
    <div className="item-list">
      <div className="main-container">
         <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" className="amazon-prime-image" alt="" />
        
        <div className="home-row">
          <Product
            id= '1'
            details={'The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'}
            
            image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}

            price={11.96} 
            
            ratings={5}/>

          <Product
             id='2'
            details={'Look Fresh With Hoodies Any Size You want'}

            image={'./hoodie.png'}

            price={839}

            ratings={4}
          />

        </div>

        <div className="home-row">

          <Product 
             id='3'
            details={"Barbie 2023 (Blu-Ray + Digital)"}

            image={"https://m.media-amazon.com/images/I/41PUy94yg+L._SY300_.jpg"}

            price={99.99}
          
            ratings={5}
          
          />


          <Product 
              id='4'
             details={"Your Local Entertaining Black Nigger From The Suburbs"}

             image={"./blacknigger.png"}

             price={0.99}

             ratings={5}
          />


          <Product
             id='5'
             details={"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"}

             image={"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"}

             price={598.99}

             ratings={3}
           />
        </div>

        <div className="home-row">

          <Product 
             id='6' 
             details={"Nintendo switch 2018 Bundeled with 3 games"}

             image={"./tv.png"}

             price={394.98}

             ratings={5}
          />

        </div>

       

      </div>
    </div>
  )
}

export default Home;