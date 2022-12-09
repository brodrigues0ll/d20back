const express = require('express');

const register = require('./routes/register');

const app = express();

app.use(express.json());

app.use('/register', register);

module.exports = app;