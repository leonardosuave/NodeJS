const express = require('express');
const route = express.Router();
const gameController = require('./src/controllers/gameController')
const userController = require('./src/controllers/userController')

const {auth} = require('./src/middleware/middleware')

//Login
route.post('/register', userController.registerUser)
route.post('/auth', userController.login)

//Listar games 
route.get('/games',  gameController.allGames);
route.get('/game/:id', gameController.oneGame);

//Criar e Deletar game
route.post('/game', gameController.newGame);
route.delete('/game/:id', gameController.deleteGame);

//Editar game
route.put('/game/:id', gameController.updateGame)

module.exports = route
