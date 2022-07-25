const Sequelize = require('sequelize'); //Import sequelize
const connection = require('./database') //Import conection DB

const Resposta = connection.define('respostas', {
    //relacionamento entre duas tabelas
    
    //Guarda o conteúdo
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    //Guarda a pergunta respondida
    perguntaID: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Resposta.sync({force: false});

module.exports = Resposta