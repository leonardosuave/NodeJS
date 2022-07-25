require('dotenv').config(); //Para esconder a senha do arquivo no repositório;
const Sequelize = require('sequelize');

//Conection
//(Nome do BD, usuário, senha, host -> no meu pc, tipo do BD)
const connection = new Sequelize('perguntasrespostas', 'root', process.env.CONNECTIONSTRING, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

module.exports = connection;