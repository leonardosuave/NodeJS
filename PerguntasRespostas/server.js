const express = require('express');
const app = express();

//View engine Express
app.set('view engine', 'ejs');

//Rotas
app.get('/', (req, res) => {
    res.render('index')
});

//Escuta
app.listen(8080, () => {
    console.log('Server conectado!')
    console.log()
    console.log('http://localhost:8080')
});