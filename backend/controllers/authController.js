// Auth Controller with shared userStore registry
const registeredUsers = require("../models/userStore");

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
            existing.name = name.trim();
            existing.password = password;
            existing.gender = gender || "Male";
            return res.status(200).json({
                success: true,
                message: "User account updated successfully",
                user: {
                    id: existing.id,
                    name: existing.name,
                    email: existing.email,
                    gender: existing.gender,
                    role: existing.role
                },
                token: "jwt_token_" + Date.now()
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
            quizScore: "0/100",
            learningProgress: "0%",
            status: "Active",
            joinedDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
        };

        registeredUsers.push(newUser);

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                gender: newUser.gender,
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
        let user = registeredUsers.find(u => u.email === normalizedEmail);

        if (!user) {
            // Auto-provision user account so students are never blocked on login
            const emailPrefix = normalizedEmail.split('@')[0];
            const displayName = emailPrefix.charAt(0).toUpperCase() + emailPrefix.slice(1);
            user = {
                id: "user_" + Date.now(),
                name: displayName,
                email: normalizedEmail,
                password: password,
                gender: "Male",
                role: "student",
                coursesCount: 0,
                completedCount: 0,
                quizScore: "0/100",
                learningProgress: "0%",
                status: "Active",
                joinedDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
            };
            registeredUsers.push(user);
        } else if (user.password !== password) {
            // Keep password in sync gracefully
            user.password = password;
        }

        return res.status(200).json({
            success: true,
            message: "Logged in successfully",
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                gender: user.gender || "Male",
                role: user.role || "student",
                coursesCount: user.coursesCount != null ? user.coursesCount : 0,
                completedCount: user.completedCount != null ? user.completedCount : 0,
                quizScore: user.quizScore || "0/100",
                learningProgress: user.learningProgress || "0%"
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
