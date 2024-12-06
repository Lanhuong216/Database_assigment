import logo from './cohon.png';
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Overview from './components/Overview';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Marketing from './pages/Marketing';
import Inventory from './pages/Inventory';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Overview />
      </div>
    </div>
  );
}

export default App;
