import React, { Component } from 'react';
import { StyleRoot } from 'radium'

import logo from './logo.svg';
// import Controller from './component/controller';
// import Controlled from './component/controlled';
// import JSONSchemaForm from './component/JSONSchemaForm';
// import Button from './component/Button';
// import Focus from './component/Focus';
// import Reset from './component/Reset';
// import Transition from './component/AnimationComponent';
// import Circle from './component/Circle';
import Button from './component/Unit7/Button';
import FontSize from './component/Unit7/FontSize';
import './App.css';

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          {/* <Transition />
          <Circle x={20} y={20} radius={20} fill="blue" /> */}
          {/* <Reset /> */}
          {/* <Focus /> */}
          {/* <Controller />
          <Controlled />
          <JSONSchemaForm />
          */}
          <Button />
          <FontSize />
        </div>
      </StyleRoot>
    );
  }
}

export default App;
