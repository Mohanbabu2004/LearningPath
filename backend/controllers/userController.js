// User Controller using shared userStore
const mockUsers = require("../models/userStore");

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
