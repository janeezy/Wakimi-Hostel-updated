/// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Spaces from './components/Spaces';
import Facilities from './components/Facilities';
import Booking from './components/Booking';
import Explore from './components/Explore';
import Blog from './components/Blog';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
