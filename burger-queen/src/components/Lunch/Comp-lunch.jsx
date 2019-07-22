import React, { Component } from 'react';
import './Comp-lunch.css';
import Button from '../Button/Comp-button.jsx'
import menu from '../../data/menu'


class OptionsLunch extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					{menu.menu.lunch.hamburgers.map(el=> 
							//console.log(el.item)
						<div className="btn-container col-4">
						<Button img={el.img} item={el.item} price={el.price} addToList={this.props.addToList}/>
						
					</div>
				)}
				</div>
	
				<div className="row">
					{menu.menu.lunch.extras.map(el =>
					<div className="btn-container col-4">
						<Button img={el.img} item={el.item} price={el.price} addToList={this.props.addToList}/>
					</div>
					)}
					</div>

				<div className="row">
					{menu.menu.lunch.others.map(el=>
					<div className="btn-container col-6">
						<Button img={el.img} item={el.item} price={el.price} addToList={this.props.addToList}/>
					</div>
					)}
				</div>

				<div className="row">
					{menu.menu.lunch.drinks.map(el=> 
					<div className="btn-container col-3">
						<Button img={el.img} item={el.item} price={el.price} addToList={this.props.addToList}/>
					</div>
					)}
				</div> 

			</div>
		)
	}
}

export default OptionsLunch