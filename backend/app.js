const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', authRoutes);
app.use('/api', appointmentRoutes);

app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

sequelize.sync().then(() => {
    console.log('Database synced');
});

module.exports = app;
