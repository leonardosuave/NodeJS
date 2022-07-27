const express = require('express');
const route = express.Router();

exports.create = (req, res) => {
    res.render('admin/categories/new')
}

/*
route.get('/categories', (req, res) => {
    res.send('Organizado por categoria')
});

module.exports = route


OBS: Em server importar essa rota -> importado na const categoriesController;

Após isso, executar pelo express as rotas importadas pelo categoriesController -> app.use('/'. categoriesController) -> '/' é prefixo e também opcional

*/

