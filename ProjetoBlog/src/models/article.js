const Sequelize = require('sequelize');
const connection = require('../../database/database')

//Create model article
const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNul: false
    }, 
    slug: {
        type: Sequelize.STRING,
        allowNul: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNul: false
    }
});

module.exports = Article