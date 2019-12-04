import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Book from './pages/Book';
import NotFound from './pages/NotFound';
import AppliedRoute from './Components/AppliedRoute';

export default function Routes({ appProps }) {
  return (
    <Router>
      <Switch>
        <AppliedRoute
          path="/"
          exact
          component={Login}
          appProps={appProps}
        />
        <AppliedRoute
          path="/home"
          component={Home}
          appProps={appProps}
        />
        <AppliedRoute
          path="/items"
          component={Book}
          appProps={appProps}
        />
        {/* <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/items" component={Book} /> */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
