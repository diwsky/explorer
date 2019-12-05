import React, { useState } from 'react';
import './App.css';
import Routes from './Routes.js';
import TitleBar from './Components/TitleBar';

function App(props) {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  return (
    <div className="App">
      <TitleBar
        title={isAuthenticated ? 'Logout' : 'Login'}
      ></TitleBar>
      <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
    </div>
  );
}
export default App;
