import React, { useState } from 'react';
import Modal from 'react-modal';
import api from '../../api';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#1A202C',
        color: '#F7FAFC',
        borderRadius: '10px',
        padding: '20px',
        width: '400px',
    },
};

const BookingModal = ({ isOpen, onRequestClose, user }) => {
    const [formData, setFormData] = useState({ date: '', time: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/appointments', formData);
            alert('Appointment booked successfully');
            onRequestClose();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel="Booking Modal"
        >
            <button onClick={onRequestClose} className="absolute top-2 right-2 text-gray-300 hover:text-white">
                &times;
            </button>
            <h2 className="text-center text-xl mb-4">Hi, I am Gabbug!</h2>
            <p className="text-center mb-4">Ready for a Quality Software? Let's Dig Deep Into Your Thought!</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="date" className="block mb-2">Select a Day</label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="time" className="block mb-2">Time zone</label>
                    <input
                        type="time"
                        name="time"
                        id="time"
                        className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md">
                    Book Appointment
                </button>
            </form>
        </Modal>
    );
};

export default BookingModal;
