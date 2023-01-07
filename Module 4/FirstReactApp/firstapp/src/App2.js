import logo from './logo.svg';
import './App.css';
import React from 'react';
import App3 from './App3';

class App2 extends React.Component {
  // Mounting
  constructor() {
    super();
    console.log("I am App2 component")
    this.state = {
      description: "App2 Component",
      counter: 0
    }
  }
  
  // Mounting
  // Updating
  static getDerivedStateFromProps(props, state) {
    return { counter: props.counter };
  }
  // Mounting
  componentWillMount() {
    this.setState({ counter: this.props.counter });
  }
  // Mounting
  componentDidMount() {
    console.log("componentDidMount() called")
  }
  // Updating
  shouldComponentUpdate() {
    return true;
  }
  // Updating
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate")
  }
  // Updating
  componentDidUpdate() {
    console.log("componentDidUpdate")
  }
  // Unmounting 
  componentWillUnmount() {
    this.setState({
      description: "App2 Component",
      counter: 0
    })
  }

  handleChange() {
    this.props.callbackfromchild("Hello Evryone");
  }

  componentWillUnmount(){

  }

  // Mounting
  // Updating
  render() {
    return <div>
      <h1>{this.state.description}</h1>
      <h3>{this.props.counter}</h3>
      <button onClick={() => this.handleChange()}>Submit</button>
      {/* <App3 counter={this.state.counter} /> */}
    </div>
  }
}

export default App2;
