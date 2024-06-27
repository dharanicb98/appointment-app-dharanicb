import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem('token');
        navigate('/signin');
    };

    const isLoggedIn = !!localStorage.getItem('token');

    return (
        <header className="text-white bg-transparent h-[70px] w-full z-10 flex justify-between items-center px-4 fixed top-0 left-0 right-0 shadow-sm">
            <nav className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
                {/* Logo */}
                <div>
                    <Link to={"/"}>
                        <img src="https://www.thoughtframeworks.com/wp-content/uploads/2022/01/TF-Logo-1.webp" alt="EdtestzAssesment logo" className="w-full h-9 rounded-full cursor-pointer" />
                    </Link>
                </div>
                {/* Navigation Links */}
                <ul className="flex justify-between items-center gap-4">
                    <li><Link to="/">Home</Link></li>
                    {!isLoggedIn && <li><Link to="/signup">Sign Up</Link></li>}
                    {!isLoggedIn && <li><Link to="/signin">Sign In</Link></li>}
                    {isLoggedIn && <li><Link to="/booking">Book Appointment</Link></li>}
                    {isLoggedIn && <li><Link to="/appointment-history">Appointment History</Link></li>}
                    {isLoggedIn && <li><button onClick={handleSignOut} className="text-white bg-transparent border border-white px-3 py-1 rounded-md">Sign Out</button></li>}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
