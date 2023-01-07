import React from 'react';
import './App.css';
import Home from './components/home/home.component';

// Class Component
class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="app">
      <Home />
    </div>);
  }
}

export default App;

