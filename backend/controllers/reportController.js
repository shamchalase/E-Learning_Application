const Report = require('../models/Report');

exports.generateReport = async (req, res) => {
    const { userId, courseId, userDetails, quizStatus, completionDate } = req.body;

    try {
        const report = new Report({ userId, courseId, userDetails, quizStatus, completionDate });
        await report.save();
        res.status(200).json(report);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
