const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Sequelize, Op } = require('sequelize');
const User = require('../models/user');

require('dotenv').config(); // Load environment variables

const JWT_SECRET = process.env.JWT_SECRET;

console.log("this token " ,JWT_SECRET)

exports.signUp = async (req, res) => {
    try {
        const { username, email, phoneNo, fullName, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, email, phoneNo, fullName, password: hashedPassword });
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.signIn = async (req, res) => {
    try {
        const { usernameOrEmail, password } = req.body;
        const user = await User.findOne({
            where: {
                [Op.or]: [{ username: usernameOrEmail }, { email: usernameOrEmail }]
            }
        });
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
