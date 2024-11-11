
const express = require('express');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const User = require('../models/User'); // Import the User model
const router = express.Router();

let currentOTP;
let currentEmail;

// Function to generate a 6-digit OTP
function generateOTP(length = 6) {
  return crypto.randomInt(100000, 999999).toString();
}

// Function to send OTP via email
async function sendOTP(email, otp) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // const mailOptions = {
  //   from: process.env.EMAIL_USER,
  //   to: email,
  //   subject: 'Your OTP Code',
  //   text: ` Your OTP code is: ${otp}`,
  // };
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Welcome to the E-Learning Application!',
    text: `Welcome to the E-Learning Application!\n\n` +
          `We are thrilled to have you join our community of learners. At our platform, we believe that education is the key to success, and we are committed to providing you with the resources and support you need to achieve your goals.\n\n` +
          `Here are a few things you can look forward to:\n` +
          `1. **Diverse Course Offerings**: Explore a wide range of courses tailored to suit your interests and career aspirations.\n` +
          `2. **Interactive Learning**: Engage with interactive content that makes learning enjoyable and effective.\n` +
          `3. **Supportive Community**: Connect with fellow learners and instructors who are here to help you every step of the way.\n` +
          `4. **Flexible Learning**: Learn at your own pace, anytime and anywhere that suits you best.\n\n` +
          `As part of your registration, we have generated an OTP (One Time Password) for you to verify your account.\n` +
          `Your OTP code is: **${otp}**\n\n` +
          `Best of luck on your learning journey! If you have any questions or need assistance, feel free to reach out to our support team.\n\n` +
          `Happy Learning!\n` +
          `The E-Learning Team`,
  };
  
  

  try {
    await transporter.sendMail(mailOptions);
    console.log('OTP sent successfully to:', email);
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw error;
  }
}

// Route to request OTP
router.post('/request-otp', async (req, res) => {
  const { email } = req.body;
  currentOTP = generateOTP();
  currentEmail = email;

  console.log('Generated OTP:', currentOTP);

  try {
    await sendOTP(email, currentOTP);
    res.status(200).send('OTP sent to your email');
  } catch (error) {
    res.status(500).send('Error sending OTP. Please try again.');
  }
});

// Route to verify OTP and store user in MongoDB
router.post('/verify-otp', async (req, res) => {
  const { otp, email } = req.body;

  console.log('Verifying OTP for email:', email);

  // Check if OTP and email match
  if (otp === currentOTP && email === currentEmail) {
    try {
      // Check if the user already exists
      let user = await User.findOne({ email });

      if (!user) {
        // Create a new user
        user = new User({ email });
        await user.save();
        console.log('New user created:', email);
      } else {
        console.log('User already exists:', email);
      }

      res.status(200).send('OTP verified successfully! User stored in MongoDB.');
    } catch (error) {
      console.error('Error saving user to MongoDB:', error);
      res.status(500).send('Error storing user in MongoDB.');
    }
  } else {
    res.status(400).send('Invalid OTP. Please try again.');
  }
});

module.exports = router;
