import React from 'react';
import Navbar from '../components/Navbar/Comp-navbar.jsx'
import Img from '../components/Logo/Comp-logo.js'


function Home (){
  
    return(
      
      <div className="Burger">
        <div className="header">
         <Navbar/>
        </div>
        <div className="bodyBurger">
        <Img/>
        </div>
        <div className= "footerBurger">

        </div>

      </div>


    )
  }

export default Home;