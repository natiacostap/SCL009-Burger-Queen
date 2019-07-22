import React, { Component } from 'react';
import './Lunch-menu.css';

class OptionsMenu extends Component {
     render(){
         return(
             <div className="row">
               <div className="col s6">
               <button className=" optionMenu btn-large">Desayuno</button>
               </div>
               <div className="col s6">
               <button className="optionMenu btn-large">NO Desayuno</button>
               </div>
             </div>
         )
     }
    }
export default OptionsMenu