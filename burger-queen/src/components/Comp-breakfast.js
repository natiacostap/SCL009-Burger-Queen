import React, { Component } from 'react';
import './breakfast.css'

class OptionsBreakfast extends Component {
     render(){
         return(
           <div>
            <div className="row">
            <div className="col s6">
             <button className="btn">Cafe Americano</button>
             <button className="btn">Cafe con Leche</button>
             </div>
             </div>

             <div className="row">
             <div className="col s6">
             <button className="btn">Sandwich Jamon Queso</button>
             <button className="btn">Jugo Natural</button>
            </div>
            </div>
            
            </div>
         )
     }
    }
export default OptionsBreakfast