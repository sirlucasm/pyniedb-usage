const express = require('express');

const route = express.Router();

const UserController = require('../controllers/UserController');

route.get('/', UserController.index);
route.post('/', UserController.create);
route.get('/:id', UserController.show);
route.delete('/:id', UserController.delete);

module.exports = route;
