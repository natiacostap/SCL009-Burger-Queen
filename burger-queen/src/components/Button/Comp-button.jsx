import React, { Component } from 'react';
import './Comp-button.css'


class Button extends Component{
  render(){
	  return (
      <button className="btn item-btn" onClick={()=>this.props.addToList(this.props.item,this.props.price)}>
        <p className="item-img">{this.props.img}</p><p className="item-name">{this.props.item}</p><p className="item-price">{this.props.price}</p>
      </button>
    )
  }
}

export default Button;