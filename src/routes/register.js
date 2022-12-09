require('dotenv').config();

const express = require('express');

const createUser = express.Router();

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

  return res.status(201).send({ user });
});

module.exports = createUser;