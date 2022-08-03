const express = require('express');
const route = express.Router();

const loginController = require('../controllers/loginController')

route.get('/admin/users/login', loginController.index)

route.post('/users/register', loginController.register)

module.exports = route