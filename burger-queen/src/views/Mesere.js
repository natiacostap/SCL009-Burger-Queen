import React, {Component} from 'react';
import List from '../components/list.js'
import Navbar from '../components/Navbar/navbar.js'
import OptionsMenu from '../components/option-menu.js';


class Mesere extends Component{
    render(){
        return(
         <div className="mesereView"> 
         <div className="header">
             <Navbar/>
         </div>
         <div>
          <OptionsMenu/>
         </div>
         <div className ="boduBurger">
             <List/>
         </div>
         </div>  

        )
    }

}
export default Mesere;