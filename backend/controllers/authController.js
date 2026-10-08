// Auth Controller
exports.register = async (req, res) => {
    try {
        const { name, email, password, gender } = req.body;
        if (!name || !email) {
            return res.status(400).json({ success: false, message: "Name and email are required" });
        }

        const newUser = {
            id: "user_" + Date.now(),
            name,
            email,
            gender: gender || "Male",
            role: "student",
            joinedDate: new Date().toISOString().split("T")[0]
        };

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: newUser,
            token: "jwt_token_mock_" + Date.now()
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email) {
            return res.status(400).json({ success: false, message: "Email is required" });
        }

        const user = {
            id: "user_101",
            name: "Mohan",
            email: email || "user@example.com",
            gender: "Male",
            role: "student",
            coursesCount: 12,
            completedCount: 4,
            quizScore: "72%",
            learningProgress: "18%"
        };

        return res.status(200).json({
            success: true,
            message: "Logged in successfully",
            user,
            token: "jwt_token_mock_logged_in"
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

exports.logout = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Logged out successfully"
    });
};
