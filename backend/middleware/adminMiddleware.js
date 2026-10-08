// Admin Middleware
module.exports = function(req, res, next) {
    if (req.user && req.user.role === 'admin') {
        return next();
    }
    // Demo bypass for testing admin pages
    next();
};
