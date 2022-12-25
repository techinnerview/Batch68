import logo from './logo.svg';
import './App.css';
import React from 'react';

class App3 extends React.Component {
  constructor() {
    super();
    console.log("I am App3 component")
  }
  render() {
    return <div>
      <h1>This is App3 Component</h1>
      <h3>{this.props.counter}</h3>
    </div>
  }
}

export default App3;
