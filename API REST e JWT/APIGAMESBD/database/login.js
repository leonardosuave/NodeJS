const connection = require('./database');
const Sequelize = require('sequelize')

//create model to login

const LoginModel = connection.define('users', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

LoginModel.sync({force: false})

module.exports = LoginModel