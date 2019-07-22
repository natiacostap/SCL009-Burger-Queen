import React from 'react';
import './Comp-navbar.css';
import { Link } from 'react-router-dom'; // aqui llamamos a Link que nos conecta con Route.js 

function Navbar () {
  return (
    <div className="container-fluid">
      <div className="row"> 
        <div className="col-4 nav-container">
          <Link to="/mesere">
            <button className="btn navbar-btn mesere" name="action">Mesere</button>
          </Link>
        </div>
        <div className="col-4 nav-container">
          <button className="btn navbar-btn cocina" name="action">Cocina</button>
        </div>
        <div className="col-4 nav-container">
          <button className="btn navbar-btn pedidos" name="action">Pedidos</button>
        </div>
      </div>  
    </div>	
  )
};

export default Navbar;



  
  