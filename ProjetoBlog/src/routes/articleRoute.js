const express = require('express');
const route = express.Router();
const articlesController = require('../controllers/articlesController')

//Home page articles
route.get('/admin/articles', articlesController.index)

//Create articles
route.get('/admin/articles/new', articlesController.indexCreate)
route.post('/articles/save', articlesController.create)

//Delete and update articles
route.get('/article/delete/:id', articlesController.delete)
route.get('/admin/article/edit/:id', articlesController.loadArticle)
route.post('/admin/article/update/:id', articlesController.updateArticle)

//Acess article by homepage
route.get('/:slug', articlesController.slugAccess)

module.exports = route