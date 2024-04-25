
import React, { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import { Route, Routes } from "react-router-dom";
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
          <Routes>
            <Route path='/' element={<Accesslogs />} />
            <Route path='/errorlogs' element={<Errorlogs />} />
            <Route path='/attacklogs' element={<Attacklogs />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
