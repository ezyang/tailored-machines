import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import machine1 from './machine1.jpg'
import machine2 from './machine2.jpg'

const App = () => (
  <Router basename={process.env.PUBLIC_URL + '/'}>
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <ul>
        <li><Link to="/taylor">Taylor</Link></li>
        <li><Link to="/other">Other</Link></li>
      </ul>
      <Route path="/taylor" component={Taylor} />
      <Route path="/other" component={Other} />
    </div>
  </Router>
);

const Taylor = ({ match }) => {
  return <div>
    Taylor
    <ul>
      <li><img src={machine1} height="300" width="300" /></li>
      <li><img src={machine2} height="300" width="300" /></li>
    </ul>
  </div>;
};

const Other = ({ match }) => {
  return <div>
    Other
  </div>;
};

export default App;
