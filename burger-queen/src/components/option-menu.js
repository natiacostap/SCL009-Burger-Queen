import React, { Component } from 'react';
import { menu } from "../data/menu.json";

class OptionsMenu extends Component {
    constructor(){
        super();
        this.state = {
           menu
        }
    }
    render(){
      const menu = this.state.menu.breakfast.map((item, i) =>{
          return (
                <button onClick="" className="btn-large">
                    <p>{item.item}</p>
                 </button>   
          )
      })
       return (
           <div>
           
             { menu }

             </div>
      )
    }
}
export default OptionsMenu