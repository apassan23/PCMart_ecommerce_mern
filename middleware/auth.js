const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No Token, Authorization Failed!' });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.jwtSecret || config.get('jwtSecret')
    );
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ msg: 'Token is invalid!' });
  }
};
