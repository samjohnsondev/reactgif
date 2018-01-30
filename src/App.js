import React, { Component } from 'react';
//import './App.css';
import BoxHolder from './components/BoxHolder';
require('dotenv').config({path: '../variables.env'});
console.log(process.env);

class App extends Component {
  render() {
    return (
      <div className="App">
        <BoxHolder />
      </div>
    );
  }
}

export default App;
