const express = require('express');
const route = express.Router();
const articlesController = require('../controllers/articlesController')

//Home page articles
route.get('/admin/articles', articlesController.index)

//Create articles
route.get('/admin/articles/new', articlesController.indexCreate)
route.post('/articles/save', articlesController.create)

module.exports = route