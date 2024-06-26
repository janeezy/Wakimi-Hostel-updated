// src/components/Support.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Support.css';

const Support = () => {
    return (
        <section className="support" id="support">
            <div className="container">
                <h1 className="animate-fade-in">Support & Help</h1>
                <p className="animate-slide-up">
                    If you have any questions or need assistance, we're here to help! Our support team is available 24/7 to ensure you have a seamless experience at Wakimi Hostel.
                </p>
                <div className="contact-info animate-slide-up">
                    <h3>Contact Support</h3>
                    <p>For any support inquiries, please reach out to us through the following channels:</p>
                    <ul>
                        <li>Email: <a href="mailto:support@wakimihostel.com">support@wakimihostel.com</a></li>
                        <li>Phone: <a href="tel:+2348138156882">+2348138156882</a></li>
                        <li>Phone: <a href="tel:+2348075946179">+2348075946179</a></li>
                        <li>WhatsApp: <a href="https://wa.me/2348080737373" target="_blank" rel="noopener noreferrer">+2348080737373</a></li>
                        <li>WhatsApp: <a href="https://wa.me/2348037003150" target="_blank" rel="noopener noreferrer">+2348037003150</a></li>
                    </ul>
                </div>
                <div className="faq-button-container animate-slide-up">
                    <Link to="/faq" className="faq-button">Visit FAQs</Link>
                </div>
            </div>
        </section>
    );
};

export default Support;
