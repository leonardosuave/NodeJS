const Sequelize = require('sequelize');
const connection = require('../../database/database');

//Create model category
const Category = connection.define('categories', {
    title: {
        type: Sequelize.STRING  ,
        allowNull: false     
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Sincronizar o model com o relacionamento na tabela de dados
Category.sync({force: false})//Para criar a tabela caso não exista 

module.exports = Category