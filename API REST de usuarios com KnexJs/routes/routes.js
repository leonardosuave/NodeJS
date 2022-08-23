var express = require("express")
var route = express.Router();

var HomeController = require("../controllers/HomeController");
const UserController = require('../controllers/UserController')

//Home
route.get('/', HomeController.index);

//User
route.post('/user', UserController.create)

module.exports = route;