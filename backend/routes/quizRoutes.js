// // const express = require('express');
// // const { getQuizByCourseId } = require('../controllers/quizController');

// // const router = express.Router();

// // router.get('/:courseId', getQuizByCourseId);

// // module.exports = router;
// const express = require('express');
// const Score = require('../models/Quiz'); // Adjust path as necessary
// const router = express.Router();

// // POST /api/scores
// router.post('/', async (req, res) => {
//   const { userId, score } = req.body;

//   try {
//     const newScore = new Score({ userId, score });
//     await newScore.save();
//     res.status(201).json({ message: 'Score saved successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error saving score', error });
//   }
// });

//
// router.post('/quiz-score', async (req, res) => {
//     const { userId, score } = req.body;
  
//     try {
//       const newScore = new Score({ userId, score });
//       await newScore.save();
//       res.status(201).json({ message: 'Score saved successfully' });
//     } catch (error) {
//       console.error('Error saving score:', error); // Log the error
//       res.status(500).json({ message: 'Error saving score', error: error.message });
//     }
//   });
//    module.exports = router;

const express = require('express'); // Ensure express is imported
const Score = require('../models/Quiz'); // Adjust path as necessary
const router = express.Router(); // Initialize the router

// POST /api/quiz/quiz-score
router.post('/quiz-score', async (req, res) => {
    const { userId, score, quizeCount } = req.body;

    try {
        const newScore = new Score({ userId, score, successFulQuizCount: quizeCount });
        await newScore.save();
        res.status(201).json({ message: 'Score saved successfully' });
    } catch (error) {
        console.error('Error saving score:', error);
        res.status(500).json({ message: 'Error saving score', error: error.message });
    }
});


// Export the router
module.exports = router;
