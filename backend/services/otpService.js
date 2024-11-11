const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables from .env file

exports.generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP
};

exports.sendOtpEmail = async (email, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // Use SSL for Gmail
      auth: {
        user: process.env.EMAIL_USER, // Load from environment variables
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Set the sender email address
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is: ${otp}`,
    };

    await transporter.sendMail(mailOptions);
    console.log('OTP email sent successfully');
  } catch (error) {
    console.error('Error sending OTP email:', error);
  }
};
