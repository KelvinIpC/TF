var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('./db');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var requestRouter = require('./routes/request');
var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, './config')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', requestRouter);

app.listen(process.env.PORT || 8080);