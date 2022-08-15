const connection = require('./database');
const Sequelize = require('sequelize')

//Create model to games

const GameModel = connection.define('games', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    produtora: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

GameModel.sync({force: false})

module.exports = GameModel