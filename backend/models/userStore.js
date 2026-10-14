// Shared User Store for LearningPath Platform
// Contains only verified accounts (creator & users who register/login)
const registeredUsers = [
    {
        id: "user_101",
        name: "Mohan Babu",
        email: "mohan@example.com",
        gender: "Male",
        password: "Password123!",
        role: "admin",
        coursesCount: 12,
        completedCount: 4,
        quizScore: "72/100",
        learningProgress: "18%",
        status: "Active",
        joinedDate: "08 Oct 2026"
    }
];

module.exports = registeredUsers;
