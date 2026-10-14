// Admin Controller using shared userStore
const registeredUsers = require("../models/userStore");

exports.getDashboard = async (req, res) => {
    return res.status(200).json({
        success: true,
        metrics: {
            totalUsers: registeredUsers.length,
            completed: registeredUsers.filter(u => u.completedCount > 0).length,
            inProgress: registeredUsers.filter(u => u.coursesCount > 0 && u.completedCount === 0).length,
            notStarted: registeredUsers.filter(u => u.coursesCount === 0).length
        }
    });
};

exports.getUsers = async (req, res) => {
    return res.status(200).json({
        success: true,
        users: registeredUsers.map(u => ({
            id: u.id,
            name: u.name,
            email: u.email,
            gender: u.gender || "Male",
            quizScore: u.quizScore || "0/100",
            result: (parseInt(u.quizScore) >= 70) ? "PASS" : "IN_PROGRESS",
            status: u.status || "Active",
            joinedDate: u.joinedDate || "Today"
        }))
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
