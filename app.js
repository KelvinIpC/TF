import express from "express";
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('./db');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var requestRouter = require('./routes/request');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', requestRouter);

app.listen(process.env.PORT || 8080);