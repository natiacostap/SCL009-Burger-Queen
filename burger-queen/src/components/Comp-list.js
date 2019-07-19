import React, { Component } from 'react';
import Item from './Comp-item'
import { menu } from '../data/menu'
import './list.css';
import 'materialize-css/dist/css/materialize.min.css';

class List extends Component {
  render() {
    return (
      
      <div className="list-container">
        <div className="row"> 
        <div className="name-container">
          <div className="col s1 client-container">
            <i className="fas fa-user-alt client-icon"></i>
          </div>
          <div className="col s11 input-field">
            <input className="input-name" type="text" placeholder="Nombre del cliente"/>
          </div>
          
        </div>
        </div>

        <div className="row">
          <div className="items-list">
            <Item name={menu.breakfast[2].item}/>
            <Item name={menu.breakfast[1].item}/>
            <Item name={menu.breakfast[1].item}/>
            <Item name={menu.breakfast[1].item}/>
            <Item name={menu.breakfast[1].item}/>
            <Item name={menu.breakfast[1].item}/>
            <Item name={menu.breakfast[1].item}/>
            <Item name={menu.breakfast[1].item}/>
            <Item name={menu.breakfast[1].item}/>
            <Item name={menu.breakfast[1].item}/>
            <Item name={menu.breakfast[1].item}/>
            <Item name={menu.breakfast[1].item}/>
            <Item name={menu.breakfast[1].item}/>
            <Item name={menu.breakfast[1].item}/>
          </div>
        </div>

        <div className="row">
          <div className="col s2 push-s7">
            <h6>Total: </h6>
          </div>
          <div className="col s3 push-s7">
            <h5 className="total-price">$ 100</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default List