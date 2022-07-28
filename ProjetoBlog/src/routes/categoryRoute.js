const express = require('express');
const route = express.Router();

const categoriesController = require('../controllers/categoriesController')

//Page with categories
route.get('/admin/categories', categoriesController.index)

//Create a new category
route.get('/admin/categories/new', categoriesController.indexCreate);
route.post('/categories/save', categoriesController.create);
route.get('/categories/delete/:id', categoriesController.delete)

module.exports = route;