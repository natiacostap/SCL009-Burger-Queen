import React, { Component } from 'react';
import List from '../components/list.js'
import Navbar from '../components/Navbar/navbar.js'
import OptionsMenu from '../components/option-menu.js';

class Mesere extends Component {
  render() {
    return(
      <div className="mesereView">
        <div className="header">
          <Navbar/>
        </div>
        <div className="">
          <div className="row">
            <div className="col s12">botón 1 botón 2</div> 
          </div>
          <div className="row">
            <div className="col s6">
              <OptionsMenu/>
            </div>
            <div className="col s6">
              
               <div className="boduBurger">
                <List/>
              </div>
            </div>  
          </div> 
          <div className="row">
            <div className="col s12"></div>  
          </div> 
        </div>
      </div>  
    )
  }
}
export default Mesere;