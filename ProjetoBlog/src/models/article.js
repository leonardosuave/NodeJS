const Sequelize = require('sequelize');
const connection = require('../../database/database')
const Category = require('../models/category'); //To relate the tables.

//Create model article
const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNul: false
    }, slug: {
        type: Sequelize.STRING,
        allowNul: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNul: false
    }
});

Category.hasMany(Article) //uma categoria tem muitos artigos (1-p-n)
Article.belongsTo(Category) //Um artigo pertense a uma categoria (1-p-1)

//Sincronizar o model com o relacionamento na tabela de dados
Article.sync({force: false}) //Para criar a tabela caso não exista

module.exports = Article