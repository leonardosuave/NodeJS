const express = require('express');
const app = express();

//Trabalha com o http nátivo do node e faz o express e o socket.io rodar no mesmo servidor http.
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.set('view engine', 'ejs');

const routes = require('./route')
app.use(routes)

//Evento de conexão sempre que o cliente conecta a aplicação websocket.
//socket é a instância do cliente conectado na aplicação.
io.on('connection', (socket) => {
    console.log(socket);
    console.log(socket.id); //Todo cliente conectado tem id unico
})

http.listen(3131, () => {
    console.log('App rodando!')
    console.log('http://localhost:3131')
})