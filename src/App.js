
import React, { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes, Router, Switch } from "react-router-dom";
import Accesslogs from './pages/Accesslogs';
import Errorlogs from './pages/Errorlogs';
import Attacklogs from './pages/Attacklogs';

function App() {
  const [logType, setLogType] = useState('access');

  const handleSidebarClick = (type) => {
    setLogType(type);
  };

  return (
    <div className="App">
      <div className='main-container'>
        <div className='side-panel-container'>
          <Sidebar onSidebarItemClick={handleSidebarClick} />
        </div>
        <div className='hero-container'>
          <Hero logType={logType} />
        </div>
      </div>
    </div>
  );
}

export default App;
