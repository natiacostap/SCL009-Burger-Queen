import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from '../components/Navbar/Comp-navbar.js'
import Img from '../components/Comp-logo.js'


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