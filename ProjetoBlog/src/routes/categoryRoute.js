const express = require('express');
const route = express.Router();

const categoriesController = require('../controllers/categoriesController')

//Page with categories
route.get('/admin/categories', categoriesController.index)

//Create a new category
route.get('/admin/categories/new', categoriesController.indexCreate);
route.post('/categories/save', categoriesController.create);

//delete and edit categories
route.get('/categories/delete/:id', categoriesController.delete)
route.get('/categories/edit/:id', categoriesController.loadCategory)
route.post('/categories/update/:id', categoriesController.updateCategory)


module.exports = route;