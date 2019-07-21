import React, {Component} from 'react';
import List from '../components/Comp-list.js'
import Navbar from '../components/Navbar/Comp-navbar.js'
import OptionsMenu from '../components/Comp-menu.js';
import OptionsLunch from '../components/Comp-lunch.js'

class Mesere extends Component{
    render(){
        return(
         <div className="mesereView"> 
         <div className="header">
             <Navbar/>
         </div>
         
        
         <div className ="body">
         <div className= "row">
           <div className="col s6">
           <OptionsMenu/>
           
        </div>
       
        
         
                  
        </div>
        </div>
        </div>
         
       
        )
    }

}
export default Mesere;