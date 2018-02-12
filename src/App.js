import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Body />
      </div>
    );
  }
}


class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      r:new Date().toLocaleTimeString()
    }
    this.getTime = this.getTime.bind(this);
  }
  getTime(){
      this.setState({ r:new Date().toLocaleTimeString() })
      this.r = new Date().toLocaleTimeString();
  }
  render() {
    return (
      <div>
        <div className = "App-intro">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </div>
        {/* <script>{setInterval(this.getTime,1000)}</script> */}
        <Timer start={Date.now()} />
      </div>
    );
  }
}

export default App;
