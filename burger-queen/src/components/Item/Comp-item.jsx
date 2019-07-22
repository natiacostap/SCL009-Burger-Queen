import React, { Component } from 'react';
import './Comp-item.css'

//Creamos componente para lista de precios
class Item extends Component {
  constructor(props){
    super(props)

  }
  //Método render para mostrar en pantalla, retorna la interfaz (html)
  render() {
    return (
      <div className="item-container">
        <tr className="row">
          <td className="col-8 item-text">{this.props.name}</td>
          <td className="col-1 price-text">{this.props.price}</td>
          <td className="col-1 count-text">{this.props.quantity}</td>
          <td className="col-3"><button className="delete-btn" onClick={()=>this.props.handleRemove(this.props.item,this.props.quantity,this.props.price)}type="button"><i className="fas fa-times"></i></button></td>
        </tr>
      </div>
    )
  }
}
export default Item