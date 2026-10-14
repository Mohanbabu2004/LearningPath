// Auth Controller with in-memory user registry
const registeredUsers = [
    {
        id: "user_default_1",
        name: "Mohan",
        email: "mohan@example.com",
        password: "Password123!",
        gender: "Male",
        role: "student",
        coursesCount: 12,
        completedCount: 4,
        quizScore: "72%",
        learningProgress: "18%",
        joinedDate: "2026-01-01"
    }
];

exports.register = async (req, res) => {
    try {
        const { name, email, password, gender } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Name, email and password are all required."
            });
        }

        const normalizedEmail = email.trim().toLowerCase();
        const existing = registeredUsers.find(u => u.email === normalizedEmail);
        if (existing) {
            return res.status(400).json({
                success: false,
                message: "An account with this email already exists! Please log in."
            });
        }

        const newUser = {
            id: "user_" + Date.now(),
            name: name.trim(),
            email: normalizedEmail,
            password: password,
            gender: gender || "Male",
            role: "student",
            coursesCount: 0,
            completedCount: 0,
            quizScore: "0%",
            learningProgress: "0%",
            joinedDate: new Date().toISOString().split("T")[0]
        };

        registeredUsers.push(newUser);

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role
            },
            token: "jwt_token_" + Date.now()
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required."
            });
        }

        const normalizedEmail = email.trim().toLowerCase();
        const user = registeredUsers.find(u => u.email === normalizedEmail);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "No account found with this email. Please create an account first!"
            });
        }

        if (user.password !== password) {
            return res.status(401).json({
                success: false,
                message: "Incorrect password. Please try again."
            });
        }

        return res.status(200).json({
            success: true,
            message: "Logged in successfully",
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                coursesCount: user.coursesCount,
                completedCount: user.completedCount,
                quizScore: user.quizScore,
                learningProgress: user.learningProgress
            },
            token: "jwt_token_" + Date.now()
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
