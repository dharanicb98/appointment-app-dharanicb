import React, { useEffect, useState } from 'react';
import api from '../../api';

const AppointmentHistory = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await api.get('/appointments');
                setAppointments(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAppointments();
    }, []);

    return (
        <div>
            <h2>Appointment History</h2>
            <ul>
                {appointments.map(appointment => (
                    <li key={appointment.id}>{appointment.date} at {appointment.time}</li>
                ))}
            </ul>
        </div>
    );
};

export default AppointmentHistory;
