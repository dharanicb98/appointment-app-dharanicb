import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import NotFound from "./components/Common/NotFound";
import Home from "./components/Home/Home";
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
import Booking from "./components/Appointments/Booking";
import AppointmentHistory from "./components/Appointments/AppointmentHistory";
import PrivateRoute from "./components/Common/PrivateRoute";
import "./App.css";

const App = () => {
  return (
    <div className="home dark-scrollbar min-h-screen flex flex-col">
      <Router>
        <Header />
        <main className="flex-1 mt-20">
          {" "}
          {/* Adjusting content spacing */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route
              path="/booking"
              element={
                <PrivateRoute>
                  <Booking />
                </PrivateRoute>
              }
            />
            <Route
              path="/appointment-history"
              element={
                <PrivateRoute>
                  <AppointmentHistory />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
