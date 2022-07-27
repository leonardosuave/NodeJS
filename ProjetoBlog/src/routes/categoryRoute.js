const express = require('express');
const route = express.Router();

const categoririesController = require('../controllers/categoriesController')

//Create a new category
route.get('/admin/categories/new', categoririesController.create)

module.exports = route