// src/components/Welcome.js
import React from 'react';
import './Welcome.css';

const Welcome = () => {
    return (
        <section className="welcome" id="welcome">
            <div className="container">
                <h1>Welcome to Wakimi Hostel Ibadan</h1>
                <p>
                    Located in the heart of Ibadan, Oyo State, Nigeria, we offer a unique blend of luxury, serenity, and convenience. Dive into the immersive experience of our private rooms equipped with individual toilets, a state-of-the-art gym area, and a serene lounge area. Your safety is our priority, and thus we have round-the-clock security ensuring a peaceful stay. Plus, everything you might need is close by.
                </p>
                <p>
                    At Wakimi Hostel, we prioritize your comfort and security. Each room is furnished with modern amenities, including a private bathroom and lounge area, ensuring you have a relaxing and enjoyable stay. Enjoy our game centre, gym, and the convenience of constant water supply and 24/7 electricity with prepaid meters. Our backup solar system guarantees that essential devices remain powered even during outages.
                </p>
                <p>
                    Our hassle-free living experience includes cleaning services and wastage disposal, enhanced security with CCTV surveillance, and a live-in security guard. Whether you're here for a short stay or a long-term visit, Wakimi Hostel provides a safe, comfortable, and luxurious environment to make your stay memorable.
                </p>
                <div className="welcome-images">
                    <img src="https://pixabay.com/photos/bed-hotel-luxurious-bedroom-4416515/" alt="Hostel Image 1" />
                    <img src="https://pixabay.com/photos/bed-hotel-luxurious-bedroom-4416515/" alt="Hostel Image 2" />
                </div>
            </div>
        </section>
    );
};

export default Welcome;
