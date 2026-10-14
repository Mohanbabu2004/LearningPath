// Shared User Store for Multi-User Platform
const registeredUsers = [
    {
        id: "user_101",
        name: "Mohan Babu",
        email: "mohan@example.com",
        gender: "Male",
        password: "Password123!",
        role: "student",
        coursesCount: 12,
        completedCount: 4,
        quizScore: "72/100",
        learningProgress: "18%",
        status: "Active",
        joinedDate: "08 Oct 2026"
    },
    {
        id: "user_102",
        name: "Ravi",
        email: "ravi@example.com",
        gender: "Male",
        password: "Password123!",
        role: "student",
        coursesCount: 8,
        completedCount: 2,
        quizScore: "28/100",
        learningProgress: "10%",
        status: "Active",
        joinedDate: "08 Oct 2026"
    },
    {
        id: "user_103",
        name: "Ananya",
        email: "ananya@example.com",
        gender: "Female",
        password: "Password123!",
        role: "student",
        coursesCount: 15,
        completedCount: 9,
        quizScore: "100/100",
        learningProgress: "60%",
        status: "Active",
        joinedDate: "07 Oct 2026"
    }
];

module.exports = registeredUsers;
