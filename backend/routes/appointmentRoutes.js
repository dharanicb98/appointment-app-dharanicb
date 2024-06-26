const express = require('express');
const { createAppointment, getAppointments } = require('../controllers/appointmentController');
const { authenticate } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/appointments', authenticate, createAppointment);
router.get('/appointments', authenticate, getAppointments);

module.exports = router;
