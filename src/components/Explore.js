// src/components/Explore.js
import React from 'react';
import './Explore.css';
import ibadanImage1 from '../ibadan images/Screenshot 2024-06-24 at 22.16.45.png'; // Replace with actual image path if needed
import ibadanImage2 from '../ibadan images/Screenshot 2024-06-24 at 22.16.54.png'; // Replace with actual image path if needed
import ibadanImage3 from '../ibadan images/Screenshot 2024-06-24 at 22.17.11.png'; // Replace with actual image path if needed

const Explore = () => {
    return (
        <section className="explore" id="explore">
            <div className="container">
                <h1 className="animate-fade-in">Explore Ibadan</h1>
                <p className="animate-slide-up">
                    Welcome to Ibadan, the largest city in West Africa by landmass and a city rich in culture, history, and opportunities. Whether you're a student, a professional, or a tourist, Ibadan has something unique to offer for everyone. From historical landmarks and cultural festivals to modern amenities and vibrant nightlife, Ibadan is a city that blends the old with the new seamlessly.
                </p>
                <h3 className="animate-slide-up">Attractions Near Wakimi Hostel</h3>
                <p className="animate-slide-up">
                    Staying at Wakimi Hostel places you in the heart of Ibadan, with easy access to numerous attractions and essential services:
                </p>
                <ul className="animate-slide-up">
                    <li><strong>Cocoa House:</strong> The first skyscraper in West Africa, offering panoramic views of the city.</li>
                    <li><strong>University of Ibadan:</strong> Nigeria's premier university, known for its lush campus and academic excellence.</li>
                    <li><strong>Agodi Gardens:</strong> A serene park perfect for relaxation, picnics, and outdoor activities.</li>
                    <li><strong>Dugbe Market:</strong> A bustling commercial hub where you can find everything from fashion to electronics.</li>
                    <li><strong>National Museum of Unity:</strong> Explore Nigeria's rich cultural heritage through its diverse exhibits.</li>
                    <li><strong>Restaurants and Cafes:</strong> Enjoy a variety of local and international cuisines at nearby dining establishments.</li>
                </ul>
                <div className="image-gallery animate-slide-up">
                    <img src={ibadanImage1} alt="Ibadan view" className="gallery-image" />
                    <img src={ibadanImage2} alt="Ibadan market" className="gallery-image" />
                    <img src={ibadanImage3} alt="Ibadan landmark" className="gallery-image" />
                </div>
                <h3 className="animate-slide-up">Convenience and Accessibility</h3>
                <p className="animate-slide-up">
                    Wakimi Hostel is strategically located to provide you with easy access to essential services:
                </p>
                <ul className="animate-slide-up">
                    <li><strong>Healthcare:</strong> Proximity to top hospitals and clinics ensures your health needs are met promptly.</li>
                    <li><strong>Transportation:</strong> Easily accessible public transportation options and major roads connect you to the rest of the city.</li>
                    <li><strong>Shopping:</strong> Close to supermarkets, shopping malls, and local markets for all your shopping needs.</li>
                    <li><strong>Entertainment:</strong> Nearby cinemas, bars, and clubs offer exciting entertainment options.</li>
                </ul>
                <h3 className="animate-slide-up">Google Map</h3>
                <p className="animate-slide-up">
                    Discover the exact location of Wakimi Hostel and explore the surroundings using the Google Map below:
                </p>
                <div className="map-container animate-slide-up">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.7672775942347!2d3.895141914281334!3d7.377535814392202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d3ab9215a0d%3A0x705b1ecdfca20d15!2sUniversity%20of%20Ibadan!5e0!3m2!1sen!2sng!4v1655303775076!5m2!1sen!2sng"
                        className="map"
                        allowFullScreen=""
                        loading="lazy"
                        title="Wakimi Hostel Location"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Explore;
