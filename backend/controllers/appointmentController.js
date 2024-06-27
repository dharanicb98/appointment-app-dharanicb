const Appointment = require('../models/appointment');
const User = require('../models/user');

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
        const appointments = await Appointment.findAll({
            where: { UserId: req.user.id },
            include: [{ model: User, attributes: ['username', 'fullName'] }]
        });
        res.json(appointments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const appointment = await Appointment.findOne({ where: { id, UserId: req.user.id } });
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        await appointment.destroy();
        res.json({ message: 'Appointment deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
