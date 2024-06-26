// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Spaces from './components/Spaces';
import Facilities from './components/Facilities';
import BookingForm from './components/BookingForm';
import Explore from './components/Explore';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import Support from './components/Support';
import FAQ from './components/FAQ';
import Payment from './components/Payment';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/spaces" element={<Spaces />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/booking" element={<BookingForm />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/support" element={<Support />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
