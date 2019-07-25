import React, {Component} from 'react';
import List from '../components/List/Comp-list.jsx'
import Navbar from '../components/Navbar/Comp-navbar.jsx'

import OptionBreakfast from '../components/Breakfast/Comp-breakfast'
import OptionsLunch from '../components/Lunch/Comp-lunch'
import '../components/Menu/Comp-menu.css';
import {db} from '../firebase/config.js';
import swal from '@sweetalert/with-react'

class Mesere extends Component{
	constructor(props){
		super(props)
		this.state={
			itemId: 1,
			showButton: true,
			list:[],
			total: 0,
			client:""
			
			
		}
		this.addToList =this.addToList.bind(this)
		this.handleRemove =this.handleRemove.bind(this)
		this.saveFirestore=this.saveFirestore.bind(this)
		this.nameClient=this.nameClient.bind(this)
		//this.App = firebase.initializeApp(ConfigFirebase)
	    
		
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
	nameClient(e){
		this.setState({
			client:e.target.value
		})

	}
	saveFirestore(){
		if(this.state.client===""){
			swal(<div className="alert">
        <h2>Queride olvidaste algo ✌ </h2>
			  <h3>Pon el nombre del client@</h3>
			  <h4>y se feliz</h4>
			</div>)
		}
		else if(this.state.total===0){
			swal(<div className="alert">
        <h2>Queride olvidaste algo ✌ </h2>
			  <h3>Agrega cosas a la lista</h3>
			  <h4>y se feliz</h4>
			</div>)
		}
		else {
		let idClient = "id"+Date.now();

		let data = {
			client:this.state.client,			
			list:this.state.list,
			total:this.state.total,
			ready:false,
			delivery:false,
			time:Date.now()
		}
		db.collection("pedidos").doc(idClient).set(data)
			.then(() => {
				this.clearList();
			})
	  }
	}
	clearList(){
		this.setState({
			list:[],
			total: 0,
			client: ""
		})
	}
	
	addToList(itemToList, priceToList) {
		let existsRepeated = false;

		this.state.list.forEach(item => {
			if(itemToList === item.item) {
				existsRepeated = true;
			}
		});

		if(!existsRepeated) {
			this.setState({
				list: this.state.list.concat([{
					id: this.state.itemId,
					item: itemToList,
					price: priceToList, 
					quantity: 1
				}]),
				total: this.state.total + priceToList
			})

		}
		else {
			let price;
			let updatedList = this.state.list.map(item => {
				if(itemToList === item.item) {
					item.quantity++;
					price = item.price;
				}
				return item;
			});

			this.setState({
				list: updatedList,
				total: this.state.total + price
			})
		}
		
		this.state.itemId++;
	}

	handleRemove(itemId){
		let quantity;
		let price;

		this.state.list.forEach(item => {
			if(itemId === item.id) {
				quantity = item.quantity;
				price = item.price;
			}
		})

		if(quantity > 1){
			let updatedList = this.state.list.map(item => {
				if(itemId === item.id) {
					item.quantity--;
				}
				return item;
			});

			this.setState({
				list: updatedList,
				total: this.state.total - price
			})
		} else {
			const filterToRemove = this.state.list.filter(item => item.id !== itemId)

			this.setState({
				list: filterToRemove,
				total: this.state.total - price
			})
		}
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
							this.state.showButton ? <OptionBreakfast addToList={this.addToList}/> : <OptionsLunch addToList={this.addToList} />
						}
					</div>
					<div className="col-12 col-md-6">
						<List list={this.state.list} handleRemove={this.handleRemove} total={this.state.total} saveFirestore={this.saveFirestore} nameClient={this.nameClient} client={this.state.client}/>
					</div>
				</div>	
				</div>
			</div>
		)
	}
}
export default Mesere;