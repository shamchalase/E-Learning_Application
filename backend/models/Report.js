const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    userDetails: {
        email: { type: String },
        name: { type: String },
    },
    quizStatus: { type: String },
    completionDate: { type: Date },
});

module.exports = mongoose.model('Report', reportSchema);
