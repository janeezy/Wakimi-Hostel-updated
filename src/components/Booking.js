import React from 'react';
import './Booking.css';

const Booking = () => {
    return (
        <section className="booking" id="booking">
            <h1 className="animate-fade-in">Book Your Stay at Wakimi Hostel</h1>
            <p className="animate-slide-up">
                Discover why we're the talk of Ibadan! Enjoy state-of-the-art facilities, impeccable services, and a serene environment.
            </p>
            <div className="features-box animate-slide-up">
                <h2>Why Choose Wakimi Hostel?</h2>
                <ul className="features-list">
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
            <button className="book-now-button">Book Now</button>
        </section>
    );
};

export default Booking;
