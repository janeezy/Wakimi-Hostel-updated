// src/components/Payment.js
import React, { useState } from 'react';
import './Payment.css';

const Payment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [amount, setAmount] = useState('');
    const [reference, setReference] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process the payment and save the data
    };

    return (
        <section className="payment" id="payment">
            <div className="container">
                <h2>Bank Transfer Payment</h2>
                <p>Please make your payment to the following account details:</p>
                <ul>
                    <li>Bank Name: Wakimi Bank</li>
                    <li>Account Number: 1234567890</li>
                    <li>Account Name: Wakimi Hostel</li>
                </ul>
                <form className="payment-form" onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Phone:
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Amount:
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Payment Reference:
                        <input
                            type="text"
                            value={reference}
                            onChange={(e) => setReference(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Payment;
