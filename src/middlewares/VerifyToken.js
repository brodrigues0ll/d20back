require('dotenv').config();

const JWT = require('jsonwebtoken');

const { User } = require('../db/models');

const VerifyToken = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const { data } = JWT.verify(authorization, process.env.JWT_SECRET);

    const user = await User.findOne({ where: { email: data } });

    req.id = user.id;
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = VerifyToken;