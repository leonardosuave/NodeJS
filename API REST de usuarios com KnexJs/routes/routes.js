var express = require("express")
var route = express.Router();

var HomeController = require("../controllers/HomeController");
const UserController = require('../controllers/UserController')
const Auth = require('../middleware/middleware')

//Home
route.get('/', HomeController.index);

//User
route.post('/user', UserController.create)
route.get('/users', Auth.auth, UserController.allUsers)
route.get('/user/:id', UserController.userById)
route.put('/user', UserController.edit)
route.delete('/user/:id', UserController.delete)

//Change Password
route.post('/recoverpassword', UserController.recoverPassword)
route.post('/changepassword', UserController.changePassword)

//Login
route.post('/login', UserController.login)

module.exports = route;