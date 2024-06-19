// src/components/Spaces.js
import React from 'react';
import './Spaces.css';
import roomImage1 from '../images/image6.png';
import roomImage2 from '../images/gymImage.png';
import roomImage3 from '../images/image3.png';
import roomImage4 from '../images/image4.png';
import roomImage5 from '../images/image5.png';
import roomImage6 from '../images/image2.png';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Spaces = () => {
    return (
        <section className="spaces" id="spaces">
            <h1 className="animate-fade-in">Our 28 Spectacular Rooms</h1>
            <div className="container">
                <p className="animate-slide-up">
                    Each room at Wakimi Hostel is designed to offer a luxurious and comfortable stay. Our rooms are equipped with modern amenities to ensure that your experience is nothing short of spectacular.
                </p>
                <div className="image-gallery">
                    <div className="image-content animate-slide-up">
                        <img src={roomImage1} alt="Room 1" className="space-image" />
                        <img src={roomImage2} alt="Room 2" className="space-image" />
                        <img src={roomImage3} alt="Room 3" className="space-image" />
                        <img src={roomImage4} alt="Room 4" className="space-image" />
                        <img src={roomImage5} alt="Room 5" className="space-image" />
                        <img src={roomImage6} alt="Room 5" className="space-image" />
                    </div>
                </div>
                <div className="book-now-container animate-slide-up">
                    <a href="/booking" className="book-now-button">Book Now</a>
                </div>
                <div className="contact-info animate-slide-up">
                    <h3>Contact Us</h3>
                    <p>For inquiries and bookings, please call:</p>
                    <ul>
                        <li><WhatsAppIcon /> +2348080737373 WhatsApp</li>
                        <li><WhatsAppIcon /> +2348037003150 WhatsApp</li>
                        <li><PhoneIcon /> +2348138156882 Phone</li>
                        <li><PhoneIcon /> +2348075946179 Phone</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Spaces;
