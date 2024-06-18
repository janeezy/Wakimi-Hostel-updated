// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; 2023 Wakimi Hostel. All rights reserved.</p>
                <ul className="social-media">
                    <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://wa.me/2348080737373" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
