const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  // Get token from header
  const authHeader = req.header('Authorization');
  
  // Check if no token
  if (!authHeader) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Split the Bearer token and get the token part
  const token = authHeader.split(' ')[1];

  // Check if token is available after splitting
  if (!token) {
    return res.status(401).json({ msg: 'Authorization token is malformed' });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
