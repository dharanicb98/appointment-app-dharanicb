import React, { useState } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [formData, setFormData] = useState({ usernameOrEmail: '', password: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/signin', formData);
            localStorage.setItem('token', response.data.token);
            setMessage('Login successful. Redirecting to booking page...');
            setTimeout(() => {
                navigate('/booking');
            }, 2000);
        } catch (error) {
            setMessage(error.response?.data?.message || 'An error occurred.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="usernameOrEmail" placeholder="Username or Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Sign In</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default SignIn;
