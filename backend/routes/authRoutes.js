const express = require('express');
const { login, verifyOtp } = require('../controllers/authController');
const router = express.Router();

router.post('/login', login);
router.post('/verify', verifyOtp);

module.exports = router;

// const express = require('express');
// const { login, verifyOTP } = require('../controllers/authController');

// const router = express.Router();

// router.post('/login', login);
// router.post('/verify-otp', verifyOTP);

// module.exports = router;
