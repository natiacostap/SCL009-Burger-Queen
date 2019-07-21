import React, { Component } from 'react';
import './Lunch-menu.css';
import OptionsLunch from './Comp-lunch.js'
import OptionBreakfast from './Comp-breakfast.js'

class OptionsMenu extends Component {
    constructor(){
        super()
        this.state={
            showButton:true
        }

        
    }
    hideLunch(){
        this.setState({
            showButton:true
        })
    }

    hideBreakfast(){
         this.setState({
             showButton:false
         })
    }
     render(){
         return(
             <div>
             <div className="row">
               
               <button className=" optionMenu btn-large" onClick={()=>this.hideLunch()}>Desayuno</button>
                           
               <button className="optionMenu btn-large"onClick={()=>this.hideBreakfast()}>NO Desayuno</button>
               
             </div>
             <div className="row">
                 {
                     this.state.showButton?/**si es verdadero imprime optionbreakfast y si no lo es el de Lunch */
                     <OptionBreakfast/>
                     :<OptionsLunch/>
                 }
             </div>
             </div>
         )
     }
    }
export default OptionsMenu