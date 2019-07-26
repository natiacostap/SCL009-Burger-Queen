import React, {Component} from 'react';
import Navbar from '../components/Navbar/Comp-navbar'

class Pedidos extends Component{
	render(){
		return(
			<div className="showPedidos">
				<div className="header">
					<Navbar/>
				</div>
				<div className="fat-cat-container container">
					<div className="row">
						<div className="col-12">
							<h1 className="fat-cat-txt">Aquí no hay nada ¡El gato se comió todo!</h1>
							<img className="fat-cat" src="https://i.ibb.co/xDQy03W/culpable.png" alt="fat-cat"/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Pedidos