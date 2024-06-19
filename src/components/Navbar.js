import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/logows.png';
import './Navbar.css';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" className="navbar">
            <Toolbar>
                <Link to="/" className="logo-link">
                    <img src={logo} alt="Wakimi Logo" className="logo" />
                    <span className="logo-text">Wakimi</span>
                </Link>
                <div className="grow"></div>
                <IconButton
                    edge="end"
                    className="menuButton"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenu}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}><Link to="/" className="menu-link">Welcome</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/spaces" className="menu-link">Spaces</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/facilities" className="menu-link">Facilities</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/booking" className="menu-link">Book Now</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/explore" className="menu-link">Explore Ibadan</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/blog" className="menu-link">Blog</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/contact" className="menu-link">Contact Us</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/support" className="menu-link">Support</Link></MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
