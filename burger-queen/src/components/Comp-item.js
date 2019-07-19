import React, { Component } from 'react';
import './item.css'
//Creamos componente para lista de precios
class Item extends Component {
  //Método render para mostrar en pantalla, retorna la interfaz (html)
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s9 item-text">{this.props.name}</div>
          <div className="col s1">1</div>
          <div className="col s2 delete-icon"><button className="delete-btn" type="button"><i class="fas fa-times"></i></button></div>
        </div>
      </div>
    )
  }
}
export default Item