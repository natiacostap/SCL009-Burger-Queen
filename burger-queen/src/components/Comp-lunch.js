import React, { Component } from 'react';

class OptionsLunch extends Component {

     render(){
         return(
           <div>
            <div className="row">
            <div className="col s3">
             <button className="btn">Hamburguesa Simple 🍔</button>
             <button className="btn">Res 🍖</button>
             <button className="btn">Pollo 🐔 </button>
             <button className="btn">Veggie 🍅</button>

             </div>
             </div>
             <div className="row">
            <div className="col s3">
             <button className="btn">Hamburguesa Doble 🍔🍔</button>
             <button className="btn">Res </button>
             <button className="btn">Pollo</button>
             <button className="btn">Veggie</button>
             </div>
             </div>


            </div>
            
         )
     }
    }
export default OptionsLunch