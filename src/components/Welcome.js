// src/components/Welcome.js
import React from 'react';
import './Welcome.css';
import welcomeImage from '../images/image3.png'; // Ensure this path is correct
import galleryImage1 from '../images/image2.png';
import galleryImage2 from '../images/image4.png';
import galleryImage3 from '../images/image5.png';

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
                        Located in the heart of Ibadan, Oyo State, Nigeria, Wakimi Hostel offers a unique blend of luxury, serenity, and convenience. Dive into the immersive experience of our private rooms equipped with individual toilets, a state-of-the-art gym area, and a serene lounge area. Your safety is our priority, and thus we have round-the-clock security ensuring a peaceful stay. Plus, everything you might need is close by.
                    </p>
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
                    <div className="location-contact animate-slide-up">
                        <h3>Location</h3>
                        <p>Apete opp. Foodmataz supermarket</p>
                        <h3>Contact Us</h3>
                        <p>For inquiries and bookings, please call:</p>
                        <ul>
                            <li>+2348080737373</li>
                            <li>+2348037003150</li>
                            <li>+2348138156882</li>
                            <li>+2348075946179</li>
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
                </div>
            </div>
            <div className="testimonials animate-slide-up">
                <h2>Testimonials</h2>
                <div className="testimonial">
                    <p>"Wakimi Hostel is the best place I've ever stayed in. The facilities are top-notch, and the staff are very friendly."</p>
                    <p>- John Okoro</p>
                </div>
                <div className="testimonial">
                    <p>"I love the cleanliness and the security at Wakimi Hostel. I feel safe and at home here."</p>
                    <p>- Jane Duru</p>
                </div>
                <div className="testimonial">
                    <p>"I love the constant electricity and the security at Wakimi Hostel. I feel safe and at home here."</p>
                    <p>- Nneoma Oge</p>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
