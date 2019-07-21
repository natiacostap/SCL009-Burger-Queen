import React, { Component } from 'react';
import './Comp-lunch.css';
import Button from '../Button/Comp-button.js'

class OptionsLunch extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="btn-container col-6">
						<Button img="🍔" item="Hamburguesa Simple" price="$ 1.500"/>
					</div>
					<div className="btn-container col-6">
						<Button img="🍔🍔" item="Hamburguesa Doble" price="$ 2.500"/>
					</div>
				</div>
				<div className="row">
					<div className="btn-container col-4">
						<Button img="🥩" item="Carne Res"/>
					</div>
					<div className="btn-container col-4">
						<Button img="🍗" item="Carne Pollo"/>
					</div>
					<div className="btn-container col-4">
						<Button img="🥑" item="Veggie"/>
					</div>
				</div>
				<div className="row">
					<div className="btn-container col-4">
						<Button img="🧀" item="c/ Queso"/>
					</div>
					<div className="btn-container col-4">
						<Button img="🍳" item="c/ Huevo"/>
					</div>
					<div className="btn-container col-4">
						<Button img="✅" item="Listo"/>
					</div>
				</div>
				<div className="row">
					<div className="btn-container col-6">
						<Button img="🍟" item="Papas Fritas" price="$ 500"/>
					</div>
					<div className="btn-container col-6">
						<Button img="🥨" item="Onion Rings" price="$ 500"/>
					</div>
				</div>
				<div className="row">
					<div className="btn-container col-3">
						<Button img="🥛" item="Agua 500ml" price="$ 500"/>
					</div>
					<div className="btn-container col-3">
						<Button img="🥛" item="Agua 750ml" price="$ 800"/>
					</div>
					<div className="btn-container col-3">
						<Button img="🥤" item="Gaseosa 500ml" price="$ 500"/>
					</div>
					<div className="btn-container col-3">
						<Button img="🥤" item="Gaseosa 750ml" price="$ 800"/>
					</div>
				</div>
			</div>
		)
	}
}

export default OptionsLunch