import React, { Component } from 'react';
import './Lunch-menu.css';

class OptionsLunch extends Component {

     render(){
         return(
           <div>
            <div className="row">
            <div className="col 6">
             <button className="Hambur"><p>Hamburguesa</p> Simple 🍔</button>
             </div>
             <div className="col s2">
             <button className="Menu"><p>Res</p> 🍖</button>
             </div>
             <div className="col s2">
             <button className="Menu"><p>Pollo</p> 🐔 </button>
             </div>
             <div className="col s2">
             <button className="Menu"><p>Veggie</p> 🍅</button>
             </div>
             
             
             </div>
             <div className="row">
            <div className="col s6">
             <button className="Hambur"><p>Hamburguesa</p> Doble 🍔🍔</button>
             </div>
             <div className="col s2">
             <button className="Menu">
             <p>Queso</p>
              🧀
              
             </button>
             </div>
             <div className="col s2">
             <button className="Menu">Huevo</button>
             </div>
             <div className="col s2">
             <button className="Enviar Menu"><p>Enviar</p>✅</button>
             </div>
             


            </div>
            </div>
            
         )
     }
    }
export default OptionsLunch