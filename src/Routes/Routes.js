import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Mesere from '../views/Mesere'
import Cocina from '../views/Cocina'
import Pedidos from '../views/Pedidos'
 
const Routes = () => {
  return(
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/mesere' component={Mesere}/>
      <Route path='/cocina' component={Cocina}/>
      <Route path='/pedidos' component={Pedidos}/>
    </Switch>
  )
}

export default Routes