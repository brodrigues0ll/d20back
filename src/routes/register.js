require('dotenv').config();

const express = require('express');

const createUser = express.Router();

const JWT = require('jsonwebtoken');

const { User } = require('../db/models');

createUser.get('/', (req, res) => {
  res.send({ message: 'Essa é a rota Register' });
});

createUser.post('/', async (req, res) => {
  const { name, last_name, username, email, password } = req.body;

  if (!name || !last_name || !username || !email || !password) {
    return res.status(400).send({ message: 'Dados incompletos' });
  }

  const user = await User.create({
    name,
    last_name,
    username,
    email,
    password,

  });

  const token = JWT.sign({
    data: {
      id: user.id,
      name: user.name,
      last_name: user.last_name,
      username: user.username,
      email: user.email,
    },
  }, process.env.JWT_SECRET);

  return res.status(201).send({ token });
});

module.exports = createUser;