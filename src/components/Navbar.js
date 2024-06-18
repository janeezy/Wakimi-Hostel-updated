// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li><a href="#welcome">Welcome</a></li>
                <li><a href="#spaces">Spaces</a></li>
                <li><a href="#facilities">Facilities</a></li>
                <li><a href="#booking">Book Now</a></li>
                <li><a href="#explore">Explore Ibadan</a></li>
                <li><a href="#blog">Blog</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
