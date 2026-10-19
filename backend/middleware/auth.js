const jwt = require('jsonwebtoken');
const { readData } = require('../db');

const JWT_SECRET = 'learningpath-secret-2026';

function auth(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    const users = readData('users');
    const user = users.find(u => u.id === decoded.id);

    if (!user) {
      return res.status(401).json({ success: false, message: 'User not found' });
    }

    const { password, ...userWithoutPassword } = user;
    req.user = userWithoutPassword;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
}

function adminOnly(req, res, next) {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ success: false, message: 'Admin access required' });
  }
  next();
}

module.exports = { auth, adminOnly, JWT_SECRET };
