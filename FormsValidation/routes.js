const express = require('express');
const route = express.Router();
const controller = require('./controller')

route.get('/', controller.index)

route.post('/form', controller.forms)

module.exports = route