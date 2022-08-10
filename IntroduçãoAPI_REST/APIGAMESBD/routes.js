const express = require('express');
const route = express.Router();
const controller = require('./controller')

//Listar games 
route.get('/games', controller.allGames);
route.get('/game/:id', controller.oneGame);

//Criar e Deletar game
route.post('/game', controller.newGame);
route.delete('/game/:id', controller.deleteGame);

//Editar game
route.put('/game/:id', controller.updateGame)

module.exports = route
