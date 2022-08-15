require('dotenv').config()
const Sequelize = require('sequelize')

const connection = new Sequelize('games', 'root', process.env.CONNECTIONSTRING, {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00',
    logging: false
});

module.exports = connection