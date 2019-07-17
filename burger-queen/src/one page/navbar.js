import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import './navbar.css'
import './Logo-1.png'
import Click from './click.js'


function Img(){
  
  return(
    <div className="row">
    <div className=" logoCat col s12 m12 ">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s10">
              <img  className="cat"src="https://i.ibb.co/ZM7jZn2/Logo-1.png" alt="" class="responsive-img"> 
            </img>
            </div>
            
          </div>
        </div>
      </div>
      </div>
  )
}
function Navbar () {

     return (
      <div>
     <div className="row"> 
    <button onClick={Click()} className="btn waves-effect waves-light col s4 mesere"  type="submit" name="action">Mesere </button>
    
    <button className="btn waves-effect waves-light col s4 cocina" type="submit" name="action">Cocina </button>
   
    <button className="btn  col s4 flow-text pedidos"   type="submit" name="action">Pedidos</button>
     
    </div>  
 
       <div className="fondo">
          <Img/>
        
       </div> 
       </div>
         
     );
  }

  
  export default Navbar;



  
  