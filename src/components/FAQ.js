/// src/components/FAQ.js
import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedQuestion, setExpandedQuestion] = useState(null);

    const faqs = [
        {
            question: "What are the room rates?",
            answer: (
                <ul>
                    <li>850,000 Naira for rent - includes solar maintenance, light, water, Gym, Relaxation louge, security, and cleaning services.</li>
                    <li>An additional 30% security fee is obligatory to ensure rooms are not damaged and is refundable on exit of the apartment.</li>
                    <li>An additional 85,000 Naira will be required if two people will stay in the apartment.</li>
                </ul>
            ),
        },
        {
            question: "What facilities are available?",
            answer: "Our hostel includes a state-of-the-art gym, game center, reliable water supply, 24/7 electricity with prepaid meters, backup solar system, professional cleaning services, enhanced security with CCTV surveillance, and a live-in security guard.",
        },
        {
            question: "How do I book a room?",
            answer: "You can book a room by visiting our booking page and filling out the form with your details. Alternatively, you can contact us via phone or WhatsApp.",
        },
        {
            question: "What is the maximum occupancy for a room?",
            answer: "Each room can accommodate one or two persons only. Additional persons in the room will incur an extra charge of 85,000 Naira.",
        },
        {
            question: "What are the registration requirements?",
            answer: "To register, you must provide a valid ID, guarantor details, and pay a security deposit.",
        },
        {
            question: "Is there a refund policy?",
            answer: "Yes, we have a refund policy. A 30% security deposit is obligatory to ensure rooms are not damaged and is refundable on exit of the apartment.",
        },
        {
            question: "How do I contact the support team?",
            answer: (
                <div>
                    If you have any questions or need assistance, feel free to reach out to us through the following channels:
                    <ul className="social-media">
                        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://wa.me/2348080737373" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                    </ul>
                </div>
            ),
        }
    ];

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const toggleQuestion = (index) => {
        setExpandedQuestion(expandedQuestion === index ? null : index);
    };

    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="faq" id="faq">
            <div className="container">
                <h2>Frequently Asked Questions</h2>
                <input
                    type="text"
                    placeholder="Search for answers..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-input"
                />
                <div className="faqs">
                    {filteredFaqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <button className="question" onClick={() => toggleQuestion(index)}>
                                {faq.question}
                            </button>
                            {expandedQuestion === index && (
                                <div className="answer">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
