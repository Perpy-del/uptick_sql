const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const rotatingFileStream = require('../config/logger');
// const connectToDb = require('../config/database');
require('dotenv').config();

// // connectToDb().then(res => console.log(res.options));
// connectToDb();

const app = express();

app.use(logger('combined', { stream: rotatingFileStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// TODO: Use cors

app.get('/api', (req, res) => res.send('Welcome to UptickSQL!!! 😎'));

module.exports = app;
