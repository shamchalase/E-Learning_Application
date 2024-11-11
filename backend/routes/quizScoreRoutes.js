// const express = require('express');
// const QuizScore = require('../models/QuizScore'); // Assuming you have a QuizScore model
// const router = express.Router();

// // POST route for submitting quiz scores
// router.post('/', async (req, res) => {
//   const { userId, score, quizCount } = req.body;

//   try {
//     const newScore = new QuizScore({
//       userId,
//       score,
//       quizCount,
//       date: new Date(), // Optionally store the date
//     });

//     await newScore.save();
//     res.status(201).json({ message: 'Score saved successfully' });
//   } catch (error) {
//     console.error('Error saving score:', error);
//     res.status(500).json({ message: 'Error saving score' });
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const { selectScore } = require('../controllers/quizController');

// Route to save selected course to the database
router.post('/quiz-score', selectScore);

module.exports = router;