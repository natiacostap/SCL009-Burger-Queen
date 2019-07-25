import React, { Component } from 'react';
import Item from '../Item/Comp-item'
import './Comp-list.css';

class List extends Component {

  render() {
    return (
      <div className="container list-container">
        <div className="row name-container">

          <div className="col-2 client-container">
            <i className="fas fa-user-alt client-icon"></i>
          </div>
          <div className="col-10 input-container">
            <input className="input-name form-control" type="text" placeholder="Nombre del cliente" onChange={this.props.nameClient} value={this.props.client}/>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="items-list">
              <table className="table table-borderless">
                <tbody>
                  {this.props.list.map(el => <Item id={el.id} name={el.item} quantity={el.quantity} handleRemove={this.props.handleRemove}/> )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row price-container">
          <div className="col-2 offset-5">
            <h6 className="total-text">Total:</h6>
          </div>
          <div className="col-5">
            <h5 className="total-price">$ {this.props.total}</h5>
          </div>
        </div>
        
        <div className="row container-sendBtn">
          <div className="col-5">
          <button className="limpiar btn btn-lg "onClick={()=>this.props.clearList()}>Limpiar</button>
            
          </div>
          <div className="col-5">
          <button className="enviarACocina btn btn-lg "onClick={()=>this.props.saveFirestore()}>Enviar</button>
          </div>
          
        </div>
      </div>
      
    );
  }
}

export default List