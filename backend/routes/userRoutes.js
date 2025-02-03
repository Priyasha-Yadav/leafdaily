import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User';

const router = express.Router();

// POST: Register new user
router.post('/register', async (req, res) => {
  const { email, password, firstName, lastName, profilePicture, ecoPoints, sustainableHabits, impactReport } = req.body;

  try {
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const newUser = new User({
      email,
      password,
      firstName,
      lastName,
      profilePicture,
      ecoPoints,
      sustainableHabits,
      impactReport,
    });

    // Save user to database
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

export default router;
