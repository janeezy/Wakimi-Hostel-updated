// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li><Link to="/">Welcome</Link></li>
                <li><Link to="/spaces">Spaces</Link></li>
                <li><Link to="/facilities">Facilities</Link></li>
                <li><Link to="/booking">Book Now</Link></li>
                <li><Link to="/explore">Explore Ibadan</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
