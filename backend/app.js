var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('./models/connection');
require('dotenv').config();

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');
var weatherRouter = require('./routes/weather');

var app = express();

const cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/weather', weatherRouter);
app.use('/users', userRouter);

module.exports = app;
