// User Controller
const mockUsers = [
    { id: "101", name: "Mohan", email: "user@example.com", gender: "Male", quizScore: "72/100", result: "PASS", status: "Active", joinedDate: "08 Oct 2026" },
    { id: "102", name: "Ravi", email: "ravi@example.com", gender: "Male", quizScore: "28/100", result: "FAIL", status: "Active", joinedDate: "08 Oct 2026" },
    { id: "103", name: "Anil", email: "anil@example.com", gender: "Male", quizScore: "100/100", result: "PASS", status: "Active", joinedDate: "07 Oct 2026" }
];

exports.getAllUsers = async (req, res) => {
    return res.status(200).json({
        success: true,
        count: mockUsers.length,
        users: mockUsers
    });
};

exports.getUserById = async (req, res) => {
    const { id } = req.params;
    const user = mockUsers.find(u => u.id === id) || mockUsers[0];
    return res.status(200).json({
        success: true,
        user
    });
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    return res.status(200).json({
        success: true,
        message: `User ${id} updated successfully`,
        updatedData: updates
    });
};
