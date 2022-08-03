const express = require('express');
const route = express.Router();

const categoriesController = require('../controllers/categoriesController');
const { loginRequired } = require('../middlewares/middleware');

//Page with categories
route.get('/admin/categories',loginRequired, categoriesController.index)

//Create a new category
route.get('/admin/categories/new',categoriesController.indexCreate);
route.post('/categories/save', categoriesController.create);

//delete and edit categories
route.get('/categories/delete/:id', categoriesController.delete)
route.get('/categories/edit/:id', categoriesController.loadCategory)
route.post('/categories/update/:id', categoriesController.updateCategory)

//access category by slug in navbar itens
route.get('/category/:slug', categoriesController.slugAccess)


module.exports = route;