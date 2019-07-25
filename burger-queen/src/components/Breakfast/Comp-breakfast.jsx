import React, { Component } from 'react';
import './Comp-breakfast.css';
import Button from '../Button/Comp-button.jsx'
import menu from '../../data/menu'

class OptionBreakfast extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
						{menu.menu.breakfast.map((el =>
						<div className="btn-container col-6">
						<Button img={el.img} item={el.item} price={el.price} key={el.item} addToList={this.props.addToList}/>
						</div>
						))}
				</div>
			</div>
		)
	}
}

export default OptionBreakfast