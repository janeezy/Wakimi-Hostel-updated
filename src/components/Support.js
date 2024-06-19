// src/components/Support.js
import React from 'react';
import './Support.css';

const Support = () => {
    return (
        <section className="support" id="support">
            <div className="container">
                <h1 className="animate-fade-in">Support & Help</h1>
                <p className="animate-slide-up">
                    If you have any questions or need assistance, we're here to help! Our support team is available 24/7 to ensure you have a seamless experience at Wakimi Hostel.
                </p>
                <h2 className="animate-slide-up">Frequently Asked Questions (FAQs)</h2>
                <ul className="faq-list animate-slide-up">
                    <li>How can I book a room at Wakimi Hostel?</li>
                    <li>What amenities are included in the room?</li>
                    <li>Is there a refund policy?</li>
                    <li>How do I contact the support team?</li>
                </ul>
                <div className="contact-info animate-slide-up">
                    <h3>Contact Support</h3>
                    <p>For any support inquiries, please reach out to us through the following channels:</p>
                    <ul>
                        <li>Email: support@wakimihostel.com</li>
                        <li>Phone: +2348138156882</li>
                        <li>Phone: +2348075946179</li>
                        <li>WhatsApp: +2348080737373</li>
                        <li>WhatsApp: +2348037003150</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Support;
