import React, { useEffect, useState } from 'react';
import api from '../../api';

const AppointmentHistory = () => {
    const [appointments, setAppointments] = useState([]);
    const [user, setUser] = useState(null);

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
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);


    const handleDelete = async (id) => {
        try {
            await api.delete(`/appointments/${id}`);
            setAppointments(appointments.filter(appointment => appointment.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="p-4 text-white">
            <h2 className="text-2xl font-semibold mb-4">Appointment History</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full  bg-[#181725] border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">#</th>
                            <th className="py-2 px-4 border-b">Consult Name</th>
                            <th className="py-2 px-4 border-b">Visit Type</th>
                            <th className="py-2 px-4 border-b">Date</th>
                            <th className="py-2 px-4 border-b">Time</th>
                            <th className="py-2 px-4 border-b">Status</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments?.map((appointment, index) => (
                            <tr key={appointment.id} className="text-center">
                                <td className="py-2 px-4 border-b">{index + 1}</td>
                                <td className="py-2 px-4 border-b">{user?.fullName}</td>
                                <td className="py-2 px-4 border-b">{appointment?.visitType}</td>
                                <td className="py-2 px-4 border-b">{new Date(appointment?.date).toLocaleDateString()}</td>
                                <td className="py-2 px-4 border-b">{appointment?.time}</td>
                                <td className="py-2 px-4 border-b">
                                    {appointment.status === 'confirmed' ? (
                                        <span className="text-green-600">Confirmed</span>
                                    ) : (
                                        <span className="text-red-600">Not Reply Yet</span>
                                    )}
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <button
                                        onClick={() => handleDelete(appointment.id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppointmentHistory;
