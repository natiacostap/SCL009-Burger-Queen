import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom'; // aqui llamamos a Link que nos conecta con Route.js 

function Navbar () {
	return (
	<div>
		<div className="row"> 
			<Link to="/mesere">
			<button className="btn waves-effect waves-light col s4 mesere" name="action">Mesere</button>
			</Link>
			<button className="btn waves-effect waves-light col s4 cocina" type="submit" name="action">Cocina</button>
			<button className="btn  col s4 flow-text pedidos" type="submit" name="action">Pedidos</button>
		</div>  
		<div className="fondo">
		</div> 
	</div>		
	);
};

export default Navbar;



  
  