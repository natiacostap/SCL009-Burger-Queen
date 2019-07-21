import React, { Component } from 'react';
import './Comp-breakfast.css';
import Button from '../Button/Comp-button.js'

class OptionBreakfast extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="btn-container col-6">
						<Button img="☕" item="Café Americano" price="$ 500"/>
					</div>
					<div className="btn-container col-6">
						<Button img="☕ + 🥛" item="Café c/ Leche" price="$ 700"/>
					</div>
				</div>
				<div className="row">
					<div className="btn-container col-6">
						<Button img="🥪" item="Sandwich Jamón/Queso" price="$ 1000"/>
					</div>
					<div className="btn-container col-6">
						<Button img="🍹" item="Jugo Natural" price="$ 1000"/>
					</div>
				</div>
			</div>
		)
	}
}

export default OptionBreakfast