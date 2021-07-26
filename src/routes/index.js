const express = require('express');

const app = express();

const UsersRoute = require('./UsersRoute');

app.use('/users', UsersRoute);

module.exports = app;
