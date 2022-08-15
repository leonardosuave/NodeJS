const GameModel = require('../../database/games')
const Game = require('../models/gameModel')

exports.allGames = async (req, res) => {
    res.statusCode = 200; //Status de success
    const games = await GameModel.findAll()
    res.json(games);
};

exports.oneGame = async (req, res) => {

    //Necessário verificar se id é um número
    if(isNaN(req.params.id)) {
        
        res.sendStatus(400); //Status que se enquadra aqui.
    } else {
        const game = await GameModel.findByPk(req.params.id)

        if(game != undefined) {
            res.statusCode = 200
            res.json(game)
        } else {

            res.sendStatus(404)
        }
        
    }
};

exports.newGame = async (req, res) => {
    
    try {
        const newGame = new Game(req.body);
        await newGame.createNewGame();
    
        if(newGame.errors.length > 0) {
            res.status(400)
            res.json({erro: newGame.errors[0]})
        } else {
            res.sendStatus(200)
        }
    } catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
}

exports.deleteGame = async (req, res) => {
    if(isNaN(req.params.id)) {
        res.sendStatus(400)
    } else {
        const deleteGame = await Game.delete(req.params.id)

        if(deleteGame) {
            res.sendStatus(200)
        } else {
            res.sendStatus(404)
        } 
    }
}

exports.updateGame = async (req, res) => {
    
    try {
        if(isNaN(req.params.id)) {
            res.sendStatus(400)
        } else {
            const updateGame = await Game.update(req.body, req.params.id)
            
            if(updateGame) {
                res.sendStatus(200)
            } else {
                res.sendStatus(404)
            }
        }
    } catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
}