// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Admin from './components/Admin';
import Background from './components/Background';
import About from './components/About';
import ServiceCards from './components/ServiceCards';
import Contact from './components/Contact';

function App() {
  return (
    
    <Router>
      <Background/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<ServiceCards/>}/>
        <Route path="/contact" element={<Contact/>} />
          
        {/* Ajoutez d'autres routes ici */}
      </Routes>
    </Router>
  );
}

export default App;
