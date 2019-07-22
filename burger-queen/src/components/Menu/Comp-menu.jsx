import React, { Component } from 'react';
import './Comp-menu.css';
import OptionsLunch from '../Lunch/Comp-lunch'
import OptionBreakfast from '../Breakfast/Comp-breakfast'

class OptionsMenu extends Component {
	constructor(props){
		super(props)
		this.state = {
			showButton: true
		}

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
						this.state.showButton ? <OptionBreakfast/> : <OptionsLunch/>
					}
				</div>
			</div>
		)
	}
}
export default OptionsMenu