import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import NotFound from './components/Common/NotFound';
import Home from './components/Home/Home';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import Booking from './components/Appointments/Booking';
import AppointmentHistory from './components/Appointments/AppointmentHistory';
import PrivateRoute from './components/Common/PrivateRoute';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/booking" element={<PrivateRoute><Booking /></PrivateRoute>} />
                <Route path="/appointment-history" element={<PrivateRoute><AppointmentHistory /></PrivateRoute>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
