// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo2.png';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav className="navbar">
            <div className="logo-container">
                <Link to="/">
                    <img src={logo} alt="Wakimi Hostel Logo" className="logo" />
                </Link>
            </div>
            <ul className="nav-list">
                <li><Link to="/">Welcome</Link></li>
                <li><Link to="/spaces">Spaces</Link></li>
                <li><Link to="/facilities">Facilities</Link></li>
                <li><Link to="/booking">Book Now</Link></li>
                <li><Link to="/explore">Explore Ibadan</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
            <IconButton 
                edge="start" 
                color="inherit" 
                aria-label="menu" 
                onClick={handleClick} 
                className="burger-menu"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><Link to="/">Welcome</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/spaces">Spaces</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/facilities">Facilities</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/booking">Book Now</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/explore">Explore Ibadan</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/blog">Blog</Link></MenuItem>
            </Menu>
        </nav>
    );
};

export default Navbar;
