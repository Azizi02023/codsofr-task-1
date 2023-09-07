import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './links/Home';
import About from './links/About';
import Service from './links/Service';
import Contace from './links/Contace';

function App() {
  return (
    <div className='App'>        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contace />} />
      </Routes>
    </div>
  );
}

export default App;
