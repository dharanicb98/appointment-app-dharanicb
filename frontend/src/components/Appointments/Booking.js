import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import api from '../../api';

Modal.setAppElement('#root');

const Booking = () => {
    const [formData, setFormData] = useState({ date: '', time: '' });
    const [isOpen, setIsOpen] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    console.log(user, "userDetails");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/appointments', formData);
            alert('Appointment booked successfully');
            setIsOpen(false); // Close the modal after successful booking
        } catch (error) {
            console.error(error);
        }
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className="modal-content bg-gray-900 text-white rounded-lg p-6"
            overlayClassName="modal-overlay"
        >
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-300 hover:text-white">
                &times;
            </button>
            <div className="text-center">
                {user ? (
                    <>
                        <h1 className="text-2xl mb-2">Hi, {user.fullName}!</h1>
                        <p className="mb-4">Ready for a Quality Software? Let's Dig Deep Into Your Thought!</p>
                    </>
                ) : (
                    <>
                        <h1 className="text-2xl mb-2">Hi, Guest!</h1>
                        <p className="mb-4">Ready for a Quality Software? Let's Dig Deep Into Your Thought!</p>
                    </>
                )}
            </div>
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

export default Booking;
