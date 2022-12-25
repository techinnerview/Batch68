import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    console.log("I am App component")
    console.log("Constructor")
  }
  render() {
    console.log("Render")
    return <div>
      <h1>Welcome to Edureka</h1>
      <h2>Hello Everyone</h2>
    </div>
  }
}

export default App;
