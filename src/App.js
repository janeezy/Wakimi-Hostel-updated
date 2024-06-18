// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Spaces from './components/Spaces';
import Facilities from './components/Facilities';
import Booking from './components/Booking';
import Explore from './components/Explore';
import Blog from './components/Blog';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Spaces />
      <Facilities />
      <Booking />
      <Explore />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
