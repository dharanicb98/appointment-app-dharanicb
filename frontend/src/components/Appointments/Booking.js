import React, { useState } from 'react';
import api from '../../api';

const Booking = () => {
    const [formData, setFormData] = useState({ date: '', time: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/appointments', formData);
            alert('Appointment booked successfully');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="date" name="date" onChange={handleChange} required />
            <input type="time" name="time" onChange={handleChange} required />
            <button type="submit">Book Appointment</button>
        </form>
    );
};

export default Booking;
