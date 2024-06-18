// src/components/BookingForm.js
import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        roomType: '',
        checkInDate: '',
        checkOutDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Here you can handle the form submission (e.g., send data to a server)
        alert('Booking request submitted!');
    };

    return (
        <section className="booking-form">
            <h2>Book Your Stay</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div>
                    <label>Room Type:</label>
                    <select name="roomType" value={formData.roomType} onChange={handleChange} required>
                        <option value="">Select Room Type</option>
                        <option value="single">Single Room 1 person</option>
                        <option value="double">Double Room 2 persons</option>
                        <option value="suite">Suite</option>
                    </select>
                </div>
                <div>
                    <label>Check-in Date:</label>
                    <input type="date" name="checkInDate" value={formData.checkInDate} onChange={handleChange} required />
                </div>
                <div>
                    <label>Check-out Date:</label>
                    <input type="date" name="checkOutDate" value={formData.checkOutDate} onChange={handleChange} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default BookingForm;
