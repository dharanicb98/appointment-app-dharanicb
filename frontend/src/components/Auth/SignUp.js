import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Models/Input';
import Button from '../Models/Button';
import api from '../../api';

const SignUp = () => {
    const initialFormData = { username: '', email: '', phoneNo: '', fullName: '', password: '' };
    const [formData, setFormData] = useState(initialFormData);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/signup', formData);
            const { token, user } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            setMessage('User created successfully. Redirecting to sign in...');
            setTimeout(() => {
                setFormData(initialFormData); // Reset form fields
                navigate('/signin');
            }, 2000);
        } catch (error) {
            setMessage(error.response?.data?.error || 'An error occurred.');
        }
    };

    return (
        <div className="bg-light h-screen flex items-center justify-center">
            <div className="bg-white w-[600px] max-h-[90%] shadow-lg rounded-lg flex flex-col items-center">
                <div className="text-4xl font-extrabold mt-6">Welcome</div>
                <div className="text-xl font-light mb-4">Sign up to get started</div>
                <div className="flex flex-col items-center w-full overflow-auto dark-scrollbar">
                    <form className="flex flex-col items-center w-full px-4" onSubmit={handleSubmit}>
                        <Input label="Username" type="text" name="username" placeholder="Username" className="mb-6 w-[75%]" value={formData.username} onChange={handleChange} required />
                        <Input label="Email" type="email" name="email" placeholder="Email" className="mb-6 w-[75%]" value={formData.email} onChange={handleChange} required />
                        <Input label="Phone Number" type="text" name="phoneNo" placeholder="Phone Number" className="mb-6 w-[75%]" value={formData.phoneNo} onChange={handleChange} required />
                        <Input label="Full Name" type="text" name="fullName" placeholder="Full Name" className="mb-6 w-[75%]" value={formData.fullName} onChange={handleChange} required />
                        <Input label="Password" type="password" name="password" placeholder="Password" className="mb-14 w-[75%]" value={formData.password} onChange={handleChange} required />
                        <Button label="Sign Up" type="submit" className="w-[75%] mb-2" />
                    </form>
                    {message && <p className="mt-2">{message}</p>}
                </div>
                <div className="mt-2 mb-6">Already have an account? <span className="text-primary cursor-pointer underline" onClick={() => navigate('/signin')}>Sign in</span></div>
            </div>
        </div>
    );
};

export default SignUp;
