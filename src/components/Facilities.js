import React from 'react';
import './Facilities.css';
import gymImage from '../images/gymImage.png'; // Replace with actual image path if needed
import gameCenterImage from '../images/gameCenterImage.png'; // Replace with actual image path if needed
import waterSupplyImage from '../images/waterSupplyImage.png'; // Replace with actual image path if needed
import electricityImage from '../images/electricityImage .png'; // Replace with actual image path if needed
import solarBackupImage from '../images/solarBackupImage.png'; // Replace with actual image path if needed
import cleaningServiceImage from '../images/cleaningServiceImage.png'; // Replace with actual image path if needed
import cctvImage from '../images/cctvImage.png'; // Replace with actual image path if needed
import securityGuardImage from '../images/securityGuardImage.png'; // Replace with actual image path if needed

const Facilities = () => {
    return (
        <section className="facilities" id="facilities">
            <div className="container">
                <h2 className="animate-slide-up">Modern Facilities</h2>
                <div className="facility">
                    <img src={gymImage} alt="Gym" className="facility-image" />
                    <div className="facility-description">
                        <h3>Gym</h3>
                        <p>State-of-the-art gym equipped with the latest fitness equipment to keep you in shape.</p>
                    </div>
                </div>
                <div className="facility">
                    <img src={gameCenterImage} alt="Game Center" className="facility-image" />
                    <div className="facility-description">
                        <h3>Game Center</h3>
                        <p>Modern game center with a variety of games to keep you entertained.</p>
                    </div>
                </div>
                <div className="facility">
                    <img src={waterSupplyImage} alt="Constant Water Supply" className="facility-image" />
                    <div className="facility-description">
                        <h3>Constant Water Supply</h3>
                        <p>Reliable water supply ensuring you never run out of water.</p>
                    </div>
                </div>
                <div className="facility">
                    <img src={electricityImage} alt="24/7 Electricity" className="facility-image" />
                    <div className="facility-description">
                        <h3>24/7 Electricity</h3>
                        <p>Uninterrupted electricity supply with prepaid meters in every room.</p>
                    </div>
                </div>
                <div className="facility">
                    <img src={solarBackupImage} alt="Backup Solar" className="facility-image" />
                    <div className="facility-description">
                        <h3>Backup Solar for Essential Devices</h3>
                        <p>Solar backup system to keep essential devices powered during outages.</p>
                    </div>
                </div>
                <div className="facility">
                    <img src={cleaningServiceImage} alt="Cleaning Services" className="facility-image" />
                    <div className="facility-description">
                        <h3>Cleaning Services</h3>
                        <p>Professional cleaning services and waste disposal for a hassle-free living experience.</p>
                    </div>
                </div>
                <div className="facility">
                    <img src={cctvImage} alt="CCTV Surveillance" className="facility-image" />
                    <div className="facility-description">
                        <h3>CCTV Surveillance</h3>
                        <p>Enhanced security with 24/7 CCTV surveillance.</p>
                    </div>
                </div>
                <div className="facility">
                    <img src={securityGuardImage} alt="Live-in Security Guard" className="facility-image" />
                    <div className="facility-description">
                        <h3>Live-in Security Guard</h3>
                        <p>Live-in security guard to ensure your safety and peace of mind.</p>
                    </div>
                </div>
                <div className="benefits-box">
                    <h2 className="animate-slide-up">Benefits of Living in Wakimi Hostel</h2>
                    
                    <ul className="benefits-list animate-slide-up">
                        <li>Comfortable and luxurious private rooms</li>
                        <li>Proximity to major attractions and essential services</li>
                        <li>Safe and secure environment with 24/7 security</li>
                        <li>Reliable water and electricity supply</li>
                        <li>Access to modern gym and game center</li>
                        <li>Professional cleaning services</li>
                        <li>Backup solar power for essential devices</li>
                    </ul>
                </div>
                <div className="contact-book animate-slide-up">
                    <h3>Contact Us</h3>
                    <p>For inquiries and bookings, please call:</p>
                    <ul>
                        <li>+2348080737373 WhatsApp</li>
                        <li>+2348037003150 WhatsApp</li>
                        <li>+2348138156882 Phone</li>
                        <li>+2348075946179 Phone</li>
                    </ul>
                    <div className="book-now-container">
                        <a href="/booking" className="book-now-button">Book Now</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Facilities;
