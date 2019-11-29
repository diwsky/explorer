import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import Home from './pages/Home';
import Items from './pages/Items';
import Login from './pages/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/items" component={Items} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
