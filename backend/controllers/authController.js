// const User = require('../models/User');
// const otpService = require('../services/otpService');

// exports.login = async (req, res) => {
//   const { email } = req.body;
//   const otp = otpService.generateOtp();
  
//   let user = await User.findOne({ email });
//   if (!user) {
//     user = new User({ email, language: 'English' });  // Set default language
//   }
//   user.otp = otp;
//   await user.save();
  
//   otpService.sendOtpEmail(email, otp);
//   res.status(200).json({ message: 'OTP sent' });
// };

// exports.verifyOtp = async (req, res) => {
//   const { email, otp } = req.body;
//   const user = await User.findOne({ email });

//   if (user && user.otp === otp) {
//     return res.status(200).json({ success: true });
//   } else {
//     return res.status(400).json({ success: false });
//   }
// };const User = require('../models/User');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6 digit OTP
};

// Register or login
exports.login = async (req, res) => {
    const { email, language } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            user = new User({ email, language, otp: generateOTP() });
            await user.save();
        } else {
            user.otp = generateOTP();
            await user.save();
        }

        // Send OTP to user's email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Your OTP Code',
            text: `Your OTP code is: ${user.otp}`,
        });

        res.status(200).json({ message: 'OTP sent to your email', userId: user._id });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// OTP Verification
exports.verifyOTP = async (req, res) => {
    const { userId, otp } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user || user.otp !== otp) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }

        user.otp = null; // Clear OTP after verification
        await user.save();

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'OTP verified', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
