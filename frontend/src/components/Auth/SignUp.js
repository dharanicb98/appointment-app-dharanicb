import React, { useState } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({ username: '', email: '', phoneNo: '', fullName: '', password: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/signup', formData);
            setMessage('User created successfully. Redirecting to sign in...');
            setTimeout(() => {
                navigate('/signin');
            }, 2000);
        } catch (error) {
            setMessage(error.response?.data?.error || 'An error occurred.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="text" name="phoneNo" placeholder="Phone Number" onChange={handleChange} required />
                <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Sign Up</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default SignUp;
