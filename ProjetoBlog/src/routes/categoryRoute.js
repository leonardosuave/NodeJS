const express = require('express');
const route = express.Router();

const categoriesController = require('../controllers/categoriesController')

//Create a new category
route.get('/admin/categories/new', categoriesController.index);
route.post('/categories/save', categoriesController.create);

module.exports = route;