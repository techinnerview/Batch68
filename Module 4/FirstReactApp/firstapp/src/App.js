import logo from './logo.svg';
import './App.css';
import React from 'react';
import App2 from './App2';
import { Typeahead } from 'react-bootstrap-typeahead';
import option from './restaurant'
import 'react-bootstrap-typeahead/css/Typeahead.min.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "This is App Component",
      description: "The Number of Count is: ",
      count: 0,
      valueFromChild: 0
    }
  }
  handleChange() {
    var { count } = this.state;
    this.setState({ count: count + 1, description: "Total Count is :", name: "App Component" });
  }

  getValuefromChild(value){
    this.setState({valueFromChild: value })
  }

  render() {
    return <div>
      <h1>{this.state.name}</h1>
      <h3>{this.state.description}  {this.state.count}</h3>
      <h1>Value from Child is: {this.state.valueFromChild}</h1>
      {/* <button onClick={() => this.handleChange()}>Submit</button> */}
      {/* <Typeahead placeholder='Enter the value' options={option} /> */}
      <App2 counter={this.state.count} callbackfromchild={this.getValuefromChild.bind(this)} />
    </div>
  }
}

export default App;
