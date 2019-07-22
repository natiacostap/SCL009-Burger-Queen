import React, {Component} from 'react';
import List from '../components/List/Comp-list.jsx'
import Navbar from '../components/Navbar/Comp-navbar.jsx'
import Menu from '../components/Menu/Comp-menu.jsx';

<<<<<<< HEAD
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
           <OptionsLunch/>
        </div>
        <div className="col s6">
           <List/>  
         </div>
         
                  
        </div>
        </div>
        </div>
         
       
        )
    }
=======

class Mesere extends Component{
	render() {
		return (
			<div className="mesereView"> 
				<div className="header">
					<Navbar/>
				</div>
				<div className ="container">
					<div className= "row">
						<div className="col-12 col-md-6">
							<Menu/>
						</div>
						<div className="col-12 col-md-6">
							<List/>
						</div>
					</div>
				</div>
			</div>
		)
	}
>>>>>>> 4003da7709981027ae330e92e998fe686e3ab0e2
}
export default Mesere;