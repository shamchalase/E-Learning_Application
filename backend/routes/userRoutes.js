const express = require('express');
const User = require('../models/User'); // Import the User model
const router = express.Router();

// Route to register a user
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('User already exists.');
    }

    const newUser = new User({ email, password });
    await newUser.save();
    res.status(201).send('User registered successfully.');
  } catch (error) {
    res.status(500).send('Error registering user.');
  }
});

module.exports = router;

// const express = require('express');
// const { getUserProgress, updateUserProgress } = require('../controllers/userController');

// const router = express.Router();

// router.get('/:userId', getUserProgress);
// router.post('/update', updateUserProgress);

// module.exports = router;
