// src/components/ContactUs.js
import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <section className="contact-us" id="contact-us">
            <div className="container">
                <h2>Contact Us</h2>
                <p>If you have any questions or need further information, feel free to reach out to us through the following channels:</p>
                <ul className="social-media">
                    <li className='link-colour'><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li className='link-colour' ><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li className=''><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li className=''><a href="https://wa.me/2348080737373" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                </ul>
                <form className="contact-form">
                    <label>
                        Name:
                        <input type="text" name="name" required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" required />
                    </label>
                    <label>
                        Message:
                        <textarea name="message" required></textarea>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
