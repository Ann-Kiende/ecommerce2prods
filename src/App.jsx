import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Card from './components/Card';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Help from './components/Help';
import Contact from './components/Contact';
// import Dropdown from './components/Dropdown';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Card />} />
        <Route path='/help' element={<Help />} />
        {/* <Route path='/dropdown' element={<Dropdown />} /> */}
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
