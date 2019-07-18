import React, { Component } from 'react';
import { menu } from "../data/menu.json";

class OptionsMenu extends Component {
  constructor() {
    super();
    this.state = {
    menu
    }
  }
  render() {
    const breakfastData = this.state.menu.breakfast.map((item, i) =>{
      return (
        <button onClick="" className="btn-large">
          <p>{item.item}</p>
        </button>   
      )
    })

    const burgerData = this.state.menu.lunch.hamburgers.options.map((item) => {
      return (
        <button onClick="" className="btn-large">
          <p>{item.item}</p>
        </button> 
      )
    })

    
    return (
      <div>
        { breakfastData }
        { burgerData }
      </div>
    )
  }
}

export default OptionsMenu