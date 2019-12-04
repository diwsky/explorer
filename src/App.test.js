import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Route } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Route>
      <App />
    </Route>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
