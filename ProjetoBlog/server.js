const express = require('express');
const app = express();
const routes = require('./routes');
const connection = require('./database/database')

app.set('view engine', 'ejs'); //view engine
app.use(express.static('public')) //conteúdo estático
app.use(express.urlencoded({extended:false}));

//Conection DB
connection
    .authenticate()
    .then(() => {
        console.log('Data Base connected!')
        app.emit('ready')
    }).catch((error) =>{
        console.log(error)
    })

app.use(routes)

app.on('ready', () => {
    app.listen(8080, () => {
        console.log('Server online')
        console.log('http://localhost:8080')
    })
})