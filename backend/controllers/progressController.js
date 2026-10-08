// Progress Controller
exports.getProgressByUserId = async (req, res) => {
    const { userId } = req.params;
    return res.status(200).json({
        success: true,
        userId,
        overallProgress: 18,
        completedCourses: 4,
        totalCourses: 12,
        quizCompleted: "1 / 36",
        currentTopic: {
            language: "C Programming",
            level: "Beginner",
            topic: "Introduction",
            progress: 72
        }
    });
};

exports.updateProgress = async (req, res) => {
    const { userId } = req.params;
    const progressData = req.body;
    return res.status(200).json({
        success: true,
        message: `Progress updated for user ${userId}`,
        progress: progressData
    });
};
