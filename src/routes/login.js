require('dotenv').config();

const express = require('express');

const JWT = require('jsonwebtoken');

const { User } = require('../db/models');


const loginRoute = express.Router();

loginRoute.post('/', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email, password } });

  if (!user) return res.status(400).json({ message: 'Invalid fields' });

  JWT.sign({ data: user.email }, process.env.JWT_SECRET);

  return res.status(200).json({ message: 'Login efetuado com sucesso' });
});


module.exports = loginRoute;