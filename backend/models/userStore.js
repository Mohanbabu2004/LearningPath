// Shared User Store for LearningPath Platform
// Owner accounts & verified student accounts
const registeredUsers = [
    {
        id: "owner_01",
        name: "R. Mohan Babu",
        email: "rmohanbabu817@gmail.com",
        gender: "Male",
        password: "Password123!",
        role: "admin",
        coursesCount: 12,
        completedCount: 6,
        quizScore: "85/100",
        learningProgress: "50%",
        status: "Active",
        joinedDate: "14 Oct 2026"
    },
    {
        id: "owner_02",
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
    },
    {
        id: "student_01",
        name: "Ganesh",
        email: "ganesh@gmail.com",
        gender: "Male",
        password: "Password123!",
        role: "student",
        coursesCount: 3,
        completedCount: 1,
        quizScore: "1/36",
        learningProgress: "8%",
        status: "Active",
        joinedDate: "14 Oct 2026"
    }
];

module.exports = registeredUsers;
