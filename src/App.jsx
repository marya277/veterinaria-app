import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Nosotros from './components/Nosotros';
import SeguimientoPacientes from './components/seguimientoPacientes';
import Contacto from './components/Contacto';
import Servicios from './components/Servicios';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/seguimientoPacientes" element={<SeguimientoPacientes />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </Router>
  );
};

export default App;
