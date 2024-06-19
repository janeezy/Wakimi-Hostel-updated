import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/logow.png';
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
            <Toolbar className="toolbar">
                <Typography variant="h6" className="title">
                    <Link to="/">
                        <img src={logo} alt="Wakimi Logo" className="logo" />
                    </Link>
                </Typography>
                <div className="nav-links">
                    <Link to="/" className="nav-link">Welcome</Link>
                    <Link to="/spaces" className="nav-link">Spaces</Link>
                    <Link to="/facilities" className="nav-link">Facilities</Link>
                    <Link to="/booking" className="nav-link">Book Now</Link>
                    <Link to="/explore" className="nav-link">Explore Ibadan</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                    <Link to="/support" className="nav-link">Support</Link>
                </div>
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
                    <MenuItem onClick={handleClose}><Link to="/">Welcome</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/spaces">Spaces</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/facilities">Facilities</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/booking">Book Now</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/explore">Explore Ibadan</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/blog">Blog</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/contact">Contact Us</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/support">Support</Link></MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
