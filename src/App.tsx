import React, { FunctionComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeGridLayout from './components/grid-layout';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <HomeGridLayout />
    </div>
  );
}

export default App;
