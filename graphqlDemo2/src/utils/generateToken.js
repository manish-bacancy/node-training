/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1d' },
  );
  return token;
};

module.exports = generateToken;
