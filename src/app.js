const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.static('public'));

app.use(cors());


const register = require('./routes/register');
const login = require('./routes/login');


app.use(express.json());

app.use('/register', register);

app.use('/login', login);

module.exports = app;