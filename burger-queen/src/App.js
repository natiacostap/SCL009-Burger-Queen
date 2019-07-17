import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/list'
import './components/list.css'
import OptionsMenu from "./components/option-menu"
import menu from './data/menu.json'

function App() {
  return (
    <div className="App">
         <OptionsMenu title="hola mundo"/>
      <h1>hola</h1>
      <List /> 
    </div>
  );
}
export default App;
