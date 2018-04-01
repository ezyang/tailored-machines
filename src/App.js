import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
  </div>;
};

const Other = ({ match }) => {
  return <div>
    Other
  </div>;
};

export default App;
