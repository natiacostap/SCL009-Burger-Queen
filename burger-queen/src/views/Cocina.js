import React, {Component} from 'react';
import Navbar from '../components/Navbar/Comp-navbar'

class Cocina extends Component{
	render(){
		return(
			<div className="showCocina">
				<div className="header">
				<Navbar/>
				</div>

				<h1>Aquí no hay nada ¡El gato se comió todo!</h1>
        <img className="fat-cat" src="https://i.ibb.co/xDQy03W/culpable.png" alt="fat-cat"/>
			</div>
		)
	}

}
export default Cocina