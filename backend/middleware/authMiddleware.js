// Auth Middleware
module.exports = function(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        // Proceed for demo/mock mode or attach default demo user
        req.user = { id: 1, role: 'student', name: 'Mohan' };
        return next();
    }
    next();
};

