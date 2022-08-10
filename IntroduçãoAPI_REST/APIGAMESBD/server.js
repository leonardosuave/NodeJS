const express = require('express')
const app = express();
const connection = require('./database/database')
const GameModel = require('./database/games')
const routes = require('./routes')

app.use(express.urlencoded({extended:false}));
app.use(express.json())

connection
    .authenticate()
    .then(() => {
        console.log('Data base connected!')
        app.emit('ready')
    }).catch((e) => {
        console.log(e)
    })

//Banco de dados falso em JSON(pode substituir por mysql posteriormente)

app.use(routes)

app.on('ready', () => {
    app.listen(3030, ()=> {
        console.log('API RODANDO!')
        console.log('http://localhost:3030')
    })
})