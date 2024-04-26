
import React from 'react';
import Sidebar from './components/Sidebar';
import { Route, Routes } from "react-router-dom";
import Accesslogs from './pages/Accesslogs';
import Errorlogs from './pages/Errorlogs';
import Attacklogs from './pages/Attacklogs';
import Startuplogs from './pages/Startuplogs';
import Shutdownlogs from './pages/Shutdownlogs';
import NgAccesslogs from './pages/NgAccesslogs';
import NgErrorlogs from './pages/NgErrorlogs';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className='main-container'>
        <div className='side-panel-container'>
          <Sidebar />
        </div>
        <div className='hero-container'>
          <Routes>
            <Route path='/' element={<Accesslogs />} />
            <Route path='/errorlogs' element={<Errorlogs />} />
            <Route path='/attacklogs' element={<Attacklogs />} />
            <Route path='/startuplogs' element={<Startuplogs />} />
            <Route path='/shutdownlogs' element={<Shutdownlogs />} />
            <Route path='/ngaccesslogs' element={<NgAccesslogs />} />
            <Route path='/ngerrorlogs' element={<NgErrorlogs />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
