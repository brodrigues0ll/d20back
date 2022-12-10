const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.static('public'));

app.use(cors());


const register = require('./routes/register');


app.use(express.json());

app.use('/register', register);

module.exports = app;