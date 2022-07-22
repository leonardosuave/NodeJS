const express = require('express');
const app = express(); //express() é a função que vai carregar todo o express na variavel.


//REQ => DADOS ENVIADOS PELO USUÁRIO
//RES => RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO

app.get('/', (req, res) => {
    res.send('Bem vindo a página!')
}) ;

//Utilizando parâmetro não obrigatório
app.get('/blog/:artigo?', (req, res) =>{
    const artigo = req.params.artigo;

    //Condicionamento de resposta caso tenha parâmetro
    if(artigo) return res.send('Artigo: ' + req.params.artigo);
    res.send('Bem vindo ao meu blog!')
})

//Utilizando parâmetro obrigatório
app.get('/ola/:nome/:empresa', (req, res) => {
    const empresa = req.params.empresa
    res.send('Oi ' +  req.params.nome + ' da ' + empresa)
})

app.get('/canal/youtube', (req,res) => {
    const canal = req.query['canal'];

    if(canal) return res.send(canal);
    res.send('Nenhum canal enviado!')
    
})

app.listen(4000, (erro) => {
    if(erro) {
        console.log('Ocorreu um erro!');
    }else {
        console.log('Servidor iniciado com sucesso!')
        console.log('http://localhost:4000')
        console.log('http://localhost:4000/blog')
        console.log('http://localhost:4000/ola')
        console.log('http://localhost:4000/canal/youtube')
    };
});