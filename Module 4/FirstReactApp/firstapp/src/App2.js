import logo from './logo.svg';
import './App.css';
import React from 'react';

class App2 extends React.Component {
  constructor() {
    super();
    console.log("I am App2 component")
  }
  render() {
    return <div>
      <h1>Welcome to Edureka Intership session</h1>
      <h2>Hello Everyone</h2>
    </div>
  }
}

export default App2;
