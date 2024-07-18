const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Route d'inscription
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, address, password } = req.body;

  try {
    const user = new User({ firstName, lastName, email, address, password });
    await user.save();
    res.status(201).send('User registered');
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(400).send(error.message);
  }
});

// Route de connexion
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(400).send('Invalid credentials');
    }

    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, 'secretKey');
    res.json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(400).send(error.message);
  }
});

module.exports = router;
