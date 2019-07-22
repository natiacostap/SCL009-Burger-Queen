import React, {Component} from 'react';
import List from '../components/List/Comp-list.jsx'
import Navbar from '../components/Navbar/Comp-navbar.jsx'
import Menu from '../components/Menu/Comp-menu.jsx';


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
}
export default Mesere;