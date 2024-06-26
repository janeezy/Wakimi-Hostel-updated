// src/components/Welcome.js
import React from 'react';
import './Welcome.css';
import welcomeImage from '../wakimiimages/wakimi1-removebg-preview.png'; // Ensure this path is correct
import galleryImage1 from '../wakimiimages/Wakimi2.jpeg';
import galleryImage2 from '../wakimiimages/Wakimi3.jpeg';
import galleryImage3 from '../wakimiimages/wakimi1.jpeg';
import galleryImage4 from '../wakimiimages/Main Wakimi.png';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StarIcon from '@mui/icons-material/Star';

const Welcome = () => {
    return (
        <section className="welcome" id="welcome">
            <h1 className="animate-fade-in">Welcome to Wakimi Hostel Ibadan</h1>
            <div className="container">
                <div className="image-content">
                    <img src={welcomeImage} alt="Luxurious Hostel" className="welcome-image" />
                </div>
                <div className="welcome-content">
                    <p className="animate-slide-up">
                        Nestled in the serene environment of Apete, Ibadan, Wakimi Hostel offers a perfect blend of luxury and comfort. Our hostel is designed to provide a tranquil retreat for students and young professionals, with modern amenities and impeccable services that ensure a hassle-free living experience.
                    </p>
                    <div className="benefits-box">
                        <h2 className="animate-slide-up">Why Choose Wakimi Hostel?</h2>
                        <ul className="benefits-list animate-slide-up">
                            <li>State-of-the-art Gym with the latest fitness equipment</li>
                            <li>Modern Game Center with a variety of games</li>
                            <li>Reliable Water Supply ensuring you never run out of water</li>
                            <li>24/7 Electricity with prepaid meters in every room</li>
                            <li>Backup Solar System for essential devices</li>
                            <li>Professional Cleaning Services and Waste Disposal</li>
                            <li>Enhanced Security with 24/7 CCTV Surveillance</li>
                            <li>Live-in Security Guard ensuring your safety</li>
                            <li>Private rooms with individual toilets and bathrooms</li>
                            <li>Comfortable lounge area for relaxation</li>
                            <li>Proximity to major attractions and essential services in Ibadan</li>
                        </ul>
                    </div>
                    <div className="location-contact animate-slide-up">
                        <h3>Location</h3>
                        <p>Apete opp. Foodmataz supermarket</p>
                        <h3>Contact Us</h3>
                        <p>For inquiries and bookings, please call:</p>
                        <ul>
                            <li><WhatsAppIcon /> +2348080737373 WhatsApp</li>
                            <li><WhatsAppIcon /> +2348037003150 WhatsApp</li>
                            <li><PhoneIcon /> +2348138156882 Phone</li>
                            <li><PhoneIcon /> +2348075946179 Phone</li>
                        </ul>
                    </div>
                    <div className="book-now-container animate-slide-up">
                        <a href="/booking" className="book-now-button">Book Now</a>
                    </div>
                </div>
            </div>
            <div className="gallery animate-slide-up">
                <h2>Gallery</h2>
                <div className="gallery-images">
                    <img src={galleryImage1} alt="Gallery 1" />
                    <img src={galleryImage2} alt="Gallery 2" />
                    <img src={galleryImage3} alt="Gallery 3" />
                    <img src={galleryImage4} alt="Gallery 3" />
                </div>
            </div>
            <div className="testimonials animate-slide-up">
                <h2>Testimonials</h2>
                <div className="testimonial">
                    <div className="stars">
                        <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                    </div>
                    <p>"Wakimi Hostel is the best place I've ever stayed in. The facilities are top-notch, and the staff are very friendly."</p>
                    <p>- John Okoro</p>
                </div>
                <div className="testimonial">
                    <div className="stars">
                        <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                    </div>
                    <p>"I love the cleanliness and the security at Wakimi Hostel. I feel safe and at home here."</p>
                    <p>- Tosin Okoro</p>
                </div>
                <div className="testimonial">
                    <div className="stars">
                        <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                    </div>
                    <p>"The amenities at Wakimi Hostel are exceptional. I highly recommend this place to anyone looking for a comfortable stay."</p>
                    <p>- Michael Johnson</p>
                </div>
                <div className="testimonial">
                    <div className="stars">
                        <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                    </div>
                    <p>"Living here has been a wonderful experience. The environment is peaceful and the services are top-notch."</p>
                    <p>- victoria Mmadu</p>
                </div>
                <p className="animate-slide-up">Over 20 people have rated Wakimi Hostel 5 stars!</p>
            </div>
        </section>
    );
};

export default Welcome;
