// ===================================================
// Quiz Controller - Backend Logic
// ===================================================

// In-memory quiz submissions store (backed up by DB schema)
const quizSubmissions = [];

exports.submitQuiz = (req, res) => {
    try {
        const {
            userId = "student_1",
            quizId,
            language,
            level,
            score,
            correct,
            incorrect,
            percentage,
            passed,
            answers
        } = req.body;

        if (!language || !level || score === undefined) {
            return res.status(400).json({
                success: false,
                message: "Missing required quiz parameters."
            });
        }

        const submission = {
            id: quizSubmissions.length + 1,
            userId,
            quizId: quizId || `${language}_${level}`,
            language,
            level,
            score,
            correct,
            incorrect,
            percentage,
            passed,
            answersCount: answers ? answers.length : 0,
            submittedAt: new Date().toISOString()
        };

        quizSubmissions.push(submission);

        console.log(`[Quiz Submission Received] User: ${userId} | ${language} ${level} | Score: ${score}/100 | Result: ${passed ? 'PASS' : 'FAIL'}`);

        return res.status(200).json({
            success: true,
            message: "Quiz submission saved successfully!",
            data: submission
        });

    } catch (error) {
        console.error("Error saving quiz submission:", error);
        return res.status(500).json({
            success: false,
            message: "Server error processing quiz submission."
        });
    }
};

exports.getQuizSubmissions = (req, res) => {
    return res.status(200).json({
        success: true,
        count: quizSubmissions.length,
        data: quizSubmissions
    });
};
