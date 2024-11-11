const mongoose = require('mongoose');

const userProgressSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    completedVideos: [{ type: String }],
    quizStatus: { type: String, enum: ['Not Started', 'In Progress', 'Completed'], default: 'Not Started' },
    quizScore: { type: Number },
    completionDate: { type: Date },
});

module.exports = mongoose.model('UserProgress', userProgressSchema);
