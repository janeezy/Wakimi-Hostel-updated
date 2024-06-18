// src/components/Spaces.js
import React from 'react';
import './Spaces.css';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';

const Spaces = () => {
    return (
        <section className="spaces" id="spaces">
            <div className="container">
                <h2>28 Spectacular Spaces</h2>
                <h4>Rooms with private toilet and kitchen</h4>
                <div className="gallery">
                    <img src={image1} alt="Room Image 1" />
                    <img src={image2} alt="Lounge Image 2" />
                    <img src={image3} alt="Room Image 3" />
                    <img src={image4} alt="Lounge Image 4" />
                    <img src="https://cdn.pixabay.com/photo/2019/08/21/10/02/bed-4416515_960_720.jpg" alt="Luxurious Bedroom" />
                </div>
                <div className="description">
                    <p>
                        Each room in Wakimi Hostel is designed to provide a luxurious and comfortable stay. Our rooms are furnished with modern amenities and stylish interiors. Each room comes with a private toilet and kitchen, ensuring you have all the privacy and convenience you need. The spacious rooms and serene lounge areas offer the perfect environment to relax and unwind.
                    </p>
                    <p>
                        Our hostel is equipped with a state-of-the-art gym and a game centre, providing plenty of opportunities for recreation and fitness. With constant water supply and 24/7 electricity powered by prepaid meters and backup solar for essential devices, we ensure a hassle-free living experience.
                    </p>
                    <p>
                        At Wakimi Hostel, we prioritize your safety with enhanced security measures including CCTV surveillance and a live-in security guard. Enjoy the convenience of cleaning services and wastage disposal, making your stay comfortable and stress-free.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Spaces;
