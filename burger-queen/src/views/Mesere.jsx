import React, {Component} from 'react';
import List from '../components/List/Comp-list.jsx'
import Navbar from '../components/Navbar/Comp-navbar.jsx'
import OptionBreakfast from '../components/Breakfast/Comp-breakfast'
import OptionsLunch from '../components/Lunch/Comp-lunch'
import '../components/Menu/Comp-menu.css';
import {db} from '../firebase/config.js';
import swal from '@sweetalert/with-react'

class Mesere extends Component {
	constructor(props) {
		super(props)
		this.state = {
			itemId: 1,
			showButton: true,
			list: [],
			total: 0,
			client: ""
		}
		this.addToList = this.addToList.bind(this)
		this.handleRemove = this.handleRemove.bind(this)
		this.saveFirestore = this.saveFirestore.bind(this)
		this.nameClient = this.nameClient.bind(this)
		this.clearList = this.clearList.bind(this)
		//this.App = firebase.initializeApp(ConfigFirebase)
	}
	//Almuerzo parte oculto
	hideLunch() {
		this.setState({
			showButton: true	
		})
	}
	//Desayuno parte mostrándose
	hideBreakfast(){
		this.setState({
		showButton:false
		})
	}
	//Guardamos nombre del cliente, nos permite cambiar su nombre.
	nameClient(e){
		this.setState({
			client: e.target.value
		})
	}
	//Guardando lista en colección de Firestore
	saveFirestore(){
		//Se agregan alerts para el usuario en casos de error
		if(this.state.client===""){
			swal( <div className="alert">
              <h3>Queride, olvidaste algo <span role="img" aria-label="peace-sign">✌</span></h3>
							<h2>Ingresa nombre del cliente</h2>
							<h5>Pronto termina el turno  <span role="img" aria-label="wink">😉</span></h5>
						</div> )
		}
		else if(this.state.total === 0){
			swal( <div className="alert">
							<h3>Queride, olvidaste algo <span role="img" aria-label="peace-sign">✌</span></h3>
							<h2>Agrega items a la lista</h2>
							<h5>Pronto termina el turno  <span role="img" aria-label="wink">😉</span></h5>
						</div>)
		}
		//Guardando datos en colección
		else {
		let idClient = "id"+Date.now();
		let data = {
				client: this.state.client,			
				list: this.state.list,
				total: this.state.total,
				ready: false,
				delivery: false,
				time: Date.now()
		}
		//Se crea colección pedidos en Firestore
		db.collection("pedidos").doc(idClient).set(data)
			.then(() => {
				this.clearList();
			})
	  }
	}
	//Función para limpiar la lista luego de enviar datos a Firestore
	clearList(){
		this.setState({
			list: [],
			total: 0,
			client: ""
		})
	}
	//Función par añadir un elemento a la lista
	addToList(itemToList, priceToList) {
		let existsRepeated = false;
		//Totamos items repetidos
		this.state.list.forEach(item => {
			if(itemToList === item.item) {
				existsRepeated = true;
			}
		});
		//Si no encuentra item repetido, se añade a la lista en una nueva línea
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
		//Si encuentra item repetido se actualiza el item anterior en la lista
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
		//Generador de Id único por item agregado
		this.setState.itemId++;
	}
	//Función para borrar item de la lista
	handleRemove(itemId){
		let quantity;
		let price;
		//Recorremos lista para encontrar item a borrar
		this.state.list.forEach(item => {
			if(itemId === item.id) {
				quantity = item.quantity;
				price = item.price;
			}
		})
		//Si existe más de uno se restará 1 a la cantidad
		if(quantity > 1){
			let updatedList = this.state.list.map(item => {
				if(itemId === item.id) {
					item.quantity--;
				}
				return item;
			});
			//Se toma lista actualizada y se descuenta el precio del item repetido en el total
			this.setState({
				list: updatedList,
				total: this.state.total - price
			})
		}
		else {
			//Borra item único de la lista y le resta el precio al total
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
							<List list={this.state.list} handleRemove={this.handleRemove} total={this.state.total} saveFirestore={this.saveFirestore} nameClient={this.nameClient} client={this.state.client} clearList={this.clearList}/>
						</div>
					</div>	
				</div>
			</div>
		)
	}
}

export default Mesere;