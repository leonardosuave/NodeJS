const Sequelize = require('sequelize'); //Import sequelize
const connection = require('./database') //Import conection DB

//Definir o model
const Pergunta = connection.define('perguntas', {
    titulo:{
        type: Sequelize.STRING,
        allowNull: false //Impedi que titulo esteja vazio no BD
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{});

Pergunta.sync({force: false}).then(() => {
    console.log('Tabela criada.')
})

module.exports = Pergunta;
