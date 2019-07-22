import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Mesere from '../views/Mesere'
 
const Routes = () => {
  return(
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/mesere' component={Mesere}/>
    </Switch>
  )
}

export default Routes