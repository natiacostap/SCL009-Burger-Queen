import React, { Component } from 'react';

class OptionsMenu extends Component {
     render(){
         return(
             <div className="row">
               <div className="col s6">
               <button className="btn-large">Desayuno</button>
               </div>
               <div className="col s6">
               <button className="btn-large">NO Desayuno</button>
               </div>
             </div>
         )
     }
    }
export default OptionsMenu