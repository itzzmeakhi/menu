import React from 'react';

import Header from './components/Header/Header';
import MenuList from './components/MenuList/MenuList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <MenuList />
    </div>
  );
}

export default App;
