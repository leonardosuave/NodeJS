const express = require('express');
const app = express();
const connection = require('./database/database');
const routes = require('./routes')

//Conection database
connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita com o banco de dados!')
        app.emit('pronto') //sinal emitido de conexão.
    })
    .catch((msgErro) => {
        console.log(msgErro)
    });

app.set('view engine', 'ejs');      //View engine Express
app.use(express.static('public'));  //Arquivos estáticos

app.use(express.urlencoded({extended:false})) //Permite coletar os dados do forms dentro da aplicação (decodifica os dados do forms)
app.use(express.json()) //Permite a leitura de dados de forms enviado via json.

app.use(routes);

//Para iniciar o BD antes do servidor.
app.on('pronto', () =>{
    //Escuta do server
    app.listen(8080, () => {
        console.log('Server conectado!')
        console.log()
        console.log('http://localhost:8080')
    });
});