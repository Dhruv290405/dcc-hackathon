const express = require('express');
const router = express.Router();
const User = require('./models/User.'); // Correct path

router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // You would typically hash the password before saving
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: 'Error registering user' });
    }
});

module.exports = router;


