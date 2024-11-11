// const mongoose = require('mongoose');

// const quizSchema = new mongoose.Schema({
//     courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
//     questions: [{
//         questionId: { type: String, required: true },
//         text: { type: String, required: true },
//         options: [{ type: String, required: true }],
//         correctAnswer: { type: String, required: true },
//     }],
// });

// module.exports = mongoose.model('Quiz', quizSchema);
const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Assuming you want to track scores by user
  score: { type: Number, required: true },
  successFulQuizCount: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quiz', quizSchema);
