const express = require('express');
const { createAppointment, getAppointments, deleteAppointment } = require('../controllers/appointmentController');
const { authenticate } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/appointments', authenticate, createAppointment);
router.get('/appointments', authenticate, getAppointments);
router.delete('/appointments/:id', authenticate, deleteAppointment);

module.exports = router;
