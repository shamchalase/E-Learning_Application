const UserProgress = require('../models/UserProgress');

exports.getUserProgress = async (req, res) => {
    const { userId } = req.params;

    try {
        const progress = await UserProgress.find({ userId });
        res.status(200).json(progress);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Update user progress
exports.updateUserProgress = async (req, res) => {
    const { userId, courseId, completedVideos, quizStatus, quizScore } = req.body;

    try {
        let progress = await UserProgress.findOne({ userId, courseId });
        
        if (!progress) {
            progress = new UserProgress({ userId, courseId, completedVideos, quizStatus, quizScore });
        } else {
            progress.completedVideos = completedVideos;
            progress.quizStatus = quizStatus;
            progress.quizScore = quizScore;
        }

        await progress.save();
        res.status(200).json(progress);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
