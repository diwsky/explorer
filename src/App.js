import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Titlebar from './components/Titlebar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Titlebar>This is test</Titlebar>
      <Button className="mainButton">Test haloo</Button>
    </div>
  );
}

export default App;
