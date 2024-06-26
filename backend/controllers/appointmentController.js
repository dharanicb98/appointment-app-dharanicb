const Appointment = require('../models/appointment');

exports.createAppointment = async (req, res) => {
    try {
        const { date, time } = req.body;
        const appointment = await Appointment.create({ date, time, UserId: req.user.id });
        res.status(201).json(appointment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.findAll({ where: { UserId: req.user.id } });
        res.json(appointments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
