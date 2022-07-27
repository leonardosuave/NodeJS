const express = require('express');
const app = express();
const path = require('path')
const connection = require('./database/database')

//Import routes
const homeRoute = require('./src/routes/homeRoute')

//view engine
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs'); 

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

//express with imports routes    
app.use(homeRoute)

app.on('ready', () => {
    app.listen(8080, () => {
        console.log('Server online')
        console.log('http://localhost:8080')
    })
})