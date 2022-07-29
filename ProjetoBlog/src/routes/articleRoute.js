const express = require('express');
const route = express.Router();
const articlesController = require('../controllers/articlesController')

//Home page articles

route.get('/admin/articles/new', articlesController.indexCreate)

module.exports = route