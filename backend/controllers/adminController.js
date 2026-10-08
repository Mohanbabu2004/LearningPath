// Admin Controller
exports.getDashboard = async (req, res) => {
    return res.status(200).json({
        success: true,
        metrics: {
            totalUsers: 125,
            completed: 24,
            inProgress: 61,
            notStarted: 40
        }
    });
};

exports.getUsers = async (req, res) => {
    return res.status(200).json({
        success: true,
        users: [
            { name: "Mohan", gender: "Male", quizScore: "72/100", result: "PASS", status: "Active", joinedDate: "08 Oct 2026" },
            { name: "Ravi", gender: "Male", quizScore: "28/100", result: "FAIL", status: "Active", joinedDate: "08 Oct 2026" },
            { name: "Anil", gender: "Male", quizScore: "100/100", result: "PASS", status: "Active", joinedDate: "07 Oct 2026" }
        ]
    });
};

exports.getCourses = async (req, res) => {
    return res.status(200).json({
        success: true,
        courses: [
            { id: "c", name: "C Programming", lessons: 10, questions: 300, status: "Open" },
            { id: "cpp", name: "C++", lessons: 10, questions: 0, status: "Locked" },
            { id: "python", name: "Python", lessons: 10, questions: 0, status: "Locked" }
        ]
    });
};

exports.getAnalytics = async (req, res) => {
    return res.status(200).json({
        success: true,
        analytics: {
            passPercentage: 72,
            failPercentage: 28,
            activeUsersPercentage: 85,
            totalQuizzesAttempted: 320
        }
    });
};
