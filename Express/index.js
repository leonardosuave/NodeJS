const express = require('express');
const app = express(); //express() é a função que vai carregar todo o express na variavel.

app.get('/', (req, res) => {
    res.send('Bem vindo a página!')
}) ;

app.listen(4000, (erro) => {
    if(erro) {
        console.log('Ocorreu um erro!');
    }else {
        console.log('Servidor iniciado com sucesso!')
        console.log('http://localhost:4000')
    };
});