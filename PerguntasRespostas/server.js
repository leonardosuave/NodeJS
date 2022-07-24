const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.set('view engine', 'ejs');      //View engine Express
app.use(express.static('public'));  //Arquivos estáticos

app.use(express.urlencoded({extended:false})) //Permite coletar os dados do forms dentro da aplicação (decodifica os dados do forms)
app.use(express.json()) //Permite a leitura de dados de forms enviado via json.

//Rotas
app.get('/', (req, res) => {
    res.render('index')
});
app.get('/perguntar', (req, res) => {
    res.render('perguntar')
});

app.post('/salvarPergunta', (req, res) => {
    const titulo = req.body.titulo
    const descricao = req.body.descricao
    res.send(`Formulário respondido! Titulo:${titulo}; Descricao:${descricao}`)  
})

//Escuta do server
app.listen(8080, () => {
    console.log('Server conectado!')
    console.log()
    console.log('http://localhost:8080')
});