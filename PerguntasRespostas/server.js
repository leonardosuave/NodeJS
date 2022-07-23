const express = require('express');
const app = express();

app.set('view engine', 'ejs');      //View engine Express
app.use(express.static('public'));  //Arquivos estáticos

//Rotas
app.get('/', (req, res) => {
    res.render('index')
});

//Escuta do server
app.listen(8080, () => {
    console.log('Server conectado!')
    console.log()
    console.log('http://localhost:8080')
});