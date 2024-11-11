// const Quiz = require('../models/Quiz');

// exports.getQuizByCourseId = async (req, res) => {
//     const { courseId } = req.params;

//     try {
//         const quiz = await Quiz.findOne({ courseId });
//         res.status(200).json(quiz);
//     } catch (error) {
//         res.status(500).json({ message: 'Server error', error });
//     }
// };
// const Course = require('../models/SelectedCourse');

// exports.getCourses = async (req, res) => {
//     try {
//         const courses = await Course.find();
//         res.status(200).json(courses);
//     } catch (error) {
//         res.status(500).json({ message: 'Server error', error });
//     }
// };

// exports.getCourseById = async (req, res) => {
//     const { id } = req.params;
    
//     try {
//         const course = await Course.findById(id);
//         res.status(200).json(course);
//     } catch (error) {
//         res.status(500).json({ message: 'Server error', error });
//     }
// };
const SelectedScore = require('../models/SelectedScore');

// Controller to handle score submission
const selectScore = async (req, res) => {
  const { userId, score, quizCount } = req.body;
console.log(userId, score, quizCount );
  try {
    // Create a new score record
    const selectedScore = new SelectedScore({
      userId,
      score,
      quizCount,
    });

    // Save the record to the database
    await selectedScore.save();
    res.status(201).json({ message: 'Score submitted successfully', data: selectedScore });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting score', error });
  }
};

module.exports = { selectScore };

