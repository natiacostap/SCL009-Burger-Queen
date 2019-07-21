import React, { Component } from 'react';
import './Lunch-menu.css';

class OptionsLunch extends Component {

     render(){
         return(
    <div className="container">
         <div className="row">
             
               <button className="Hambur"><p>Hamburguesa</p> Simple 🍔</button>
             
             
               <button className="Menu"><p>Res</p> 🍖</button>
                       
               <button className="Menu"><p>Pollo</p> 🐔 </button>
                        
               <button className="Menu"><p>Veggie</p> 🍅</button>
           
             
         </div>

         <div className="row">
           
              <button className="Hambur"><p>Hamburguesa</p> Doble 🍔🍔</button>
                        
             <button className="Menu"><p>Queso</p>🧀</button>
            
             <button className="Menu">Huevo</button>
           
              <button className="Enviar Menu"><p>Enviar</p>✅</button>
   
         
        </div>
    
     </div>
          
         )
     }
    }
export default OptionsLunch