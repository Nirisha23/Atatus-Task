
import './App.css';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <div className='side-panel-container'>
          <Sidebar />
        </div>
        <div className='hero-container'>
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default App;
