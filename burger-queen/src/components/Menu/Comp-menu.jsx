import React, { Component } from 'react';
import './Comp-menu.css';
import OptionsLunch from '../Lunch/Comp-lunch'
import OptionBreakfast from '../Breakfast/Comp-breakfast'


class OptionsMenu extends Component {
	constructor(props){
		super(props)
		this.state = {
			showButton: true,
			list:[]
		}
    this.addToList = this.addToList.bind(this)
	}
	hideLunch() {
		this.setState({
			showButton: true
		})
	}

	hideBreakfast(){
		this.setState({
		showButton:false
		})
	}

	addToList(itemToList, priceToList){
		this.setState(
			//console.log("esto es", item, price)
			{list: this.state.list.concat([{item: itemToList, price:priceToList, quantity:1}])}
		)
	}
	render(){
		return(
			<div className="container">
				<div className="row menu-btn-container">
					<button className="btn optionMenu btn-large" onClick={()=>this.hideLunch()}>Desayuno</button>
					<button className="btn optionMenu btn-large" onClick={()=>this.hideBreakfast()}>Almuerzo</button>
				</div>
				<div className="row">
					{
						/**si es verdadero imprime optionbreakfast y si no lo es el de Lunch */
						this.state.showButton ?
						 <OptionBreakfast addToList={this.addToList}/> : 
						 <OptionsLunch addToList={this.addToList}/>
						 
					}
				</div>
				{/* <div className="col-6 col-md-6">
						<List list={this.state.list}/>
						</div> */}
			</div>
		)
	}
}
export default OptionsMenu