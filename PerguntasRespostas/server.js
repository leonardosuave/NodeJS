const express = require('express');
const app = express();

//View engine Express
app.set('view engine', 'ejs');

//Rotas
app.get('/:nome?/:lang?', (req, res) => {

    //Vai pegar os parametros e jogar na view index.ejs
    const nome = req.params.nome;
    const lang = req.params.lang;

    const objeto = {pet: 'Judite', carro: 'HB20'}
    res.render('index', {
        objeto,
        nome: nome,
        lang: lang,
        empresa: 'Sem empresa',
        inscritos: 80000
    });
});

//Escuta
app.listen(8080, () => {
    console.log('Server conectado!')
    console.log()
    console.log('http://localhost:8080')
});