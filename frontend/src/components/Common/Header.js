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
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {!isLoggedIn && <li><Link to="/signup">Sign Up</Link></li>}
                    {!isLoggedIn && <li><Link to="/signin">Sign In</Link></li>} {/* Corrected this line */}
                    {isLoggedIn && <li><Link to="/booking">Book Appointment</Link></li>}
                    {isLoggedIn && <li><Link to="/appointment-history">Appointment History</Link></li>}
                    {isLoggedIn && <li><button onClick={handleSignOut} className="">Sign Out</button></li>}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
