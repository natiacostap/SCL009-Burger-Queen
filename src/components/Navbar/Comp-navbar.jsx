import React from 'react';
import './Comp-navbar.css';
import { Link } from 'react-router-dom'; // aqui llamamos a Link que nos conecta con Route.js 

function Navbar () {
  return (
    <div className="container-fluid">
      <div className="row"> 
      <div className="col-3 nav-container">
        <Link to="/">
        <button className="btn navbar-btn Home" name="action">Home</button>
        </Link>
        </div>  
        <div className="col-3 nav-container">
          <Link to="/mesere">
            <button className="btn navbar-btn mesere" name="action">Mesere</button>
          </Link>
        </div>
        <div className="col-3 nav-container">
        <Link to="/cocina">
          <button className="btn navbar-btn cocina" name="action">Cocina</button>
          </Link>
        </div>
        <div className="col-3 nav-container">
        <Link to="/pedidos">
          <button className="btn navbar-btn pedidos" name="action">Pedidos</button>
          </Link>
        </div>
        
     
    </div>	
    </div>	
  )
};

export default Navbar;



  
  