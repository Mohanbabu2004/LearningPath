// Quiz Controller
const quizSubmissions = [
    {
        id: "qres_101",
        userId: "student_1",
        quizId: "C_Beginner",
        language: "C",
        level: "Beginner",
        score: 72,
        totalQuestions: 100,
        correct: 72,
        incorrect: 28,
        percentage: 72,
        passed: true,
        submittedAt: new Date().toISOString()
    }
];

exports.getQuestions = (req, res) => {
    const { language = "C", level = "Beginner" } = req.query;
    return res.status(200).json({
        success: true,
        language,
        level,
        totalQuestions: 100,
        message: `Fetched 100 questions for ${language} - ${level}`
    });
};

exports.submitQuiz = (req, res) => {
    try {
        const {
            userId = "student_1",
            quizId,
            language = "C",
            level = "Beginner",
            score = 0,
            correct = 0,
            incorrect = 0,
            percentage = 0,
            passed = false,
            answers = []
        } = req.body;

        const submission = {
            id: "qres_" + (quizSubmissions.length + 100),
            userId,
            quizId: quizId || `${language}_${level}`,
            language,
            level,
            score,
            totalQuestions: 100,
            correct,
            incorrect,
            percentage,
            passed,
            answersCount: answers.length,
            submittedAt: new Date().toISOString()
        };

        quizSubmissions.push(submission);

        return res.status(200).json({
            success: true,
            message: "Quiz submitted successfully!",
            data: submission
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

exports.getResultById = (req, res) => {
    const { id } = req.params;
    const result = quizSubmissions.find(q => q.id === id) || quizSubmissions[0];
    return res.status(200).json({
        success: true,
        result
    });
};

exports.getQuizSubmissions = (req, res) => {
    return res.status(200).json({
        success: true,
        count: quizSubmissions.length,
        data: quizSubmissions
    });
};
