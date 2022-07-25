const express = require('express');
const route = express.Router();


//Controllers
const homeController = require('./src/controllers/homeController');
const perguntarController = require('./src/controllers/perguntarController');
const responderController = require('./src/controllers/responderController');

//Rotas
route.get('/', homeController.index); //Pagina principal
route.get('/perguntar', perguntarController.index); //Pagina de perguntar
route.post('/salvarPergunta', perguntarController.perguntar) //Rota de envio de pergunta 
route.get('/perguntar/:id', perguntarController.responderPergunta)
route.post('/responder', responderController.enviarResposta)

module.exports = route;