import React, {Component} from 'react';
import List from '../components/List/Comp-list.jsx'
import Navbar from '../components/Navbar/Comp-navbar.jsx'
import OptionBreakfast from '../components/Breakfast/Comp-breakfast'
import OptionsLunch from '../components/Lunch/Comp-lunch'
import '../components/Menu/Comp-menu.css';


class Mesere extends Component{
	constructor(props){
		super(props)
		this.state={
			showButton: true,
			list:[]
		}
		this.addToList =this.addToList.bind(this)

	}

	addToList(item,price){
		this.setState({
			list:this.state.list.concat([{item:item,price:price,quantity:1}])
		})
		
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
	
	render() {
		return (
			<div className="mesereView"> 
				<div className="header">
					<Navbar/>
				</div>
				<div className ="container">
					<div className= "row menu-btn-container">
						<div className= "col-12 col-md-6">
					<button className="btn optionMenu btn-large" onClick={()=>this.hideLunch()}>Desayuno</button>
					<button className="btn optionMenu btn-large" onClick={()=>this.hideBreakfast()}>Almuerzo</button>
					</div>
					</div>
					<div className="row">
					<div className="col-12 col-md-6">
					{
						/**si es verdadero imprime optionbreakfast y si no lo es el de Lunch */
						this.state.showButton ? <OptionBreakfast addToList={this.addToList} /> : <OptionsLunch addToList={this.addToList} />
					}
				    </div>
						<div className="col-12 col-md-6">
							<List list={this.state.list} />
						</div>
				</div>	
				</div>
			</div>
		)
	}
}
export default Mesere;