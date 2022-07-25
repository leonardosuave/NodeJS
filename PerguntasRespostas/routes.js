const express = require('express');
const route = express.Router();


//Controllers
const homeController = require('./src/controllers/homeController');
const perguntarController = require('./src/controllers/perguntarController');

//Rotas
route.get('/', homeController.index); //Pagina principal
route.get('/perguntar', perguntarController.index); //Pagina de perguntar
route.post('/salvarPergunta', perguntarController.perguntar) //Rota de envio de pergunta 

module.exports = route;