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

    //socket -> refere-se ao cliente (cada cliente é um socket diferente)

    //Detecta cliente desconectado
    socket.on('disconnect', () => {
        console.log('X desconectou: ' + socket.id)
    })

    //Emite eventos
    socket.on('palavra', (data) => {
        console.log('Executando evento de boas vindas')
        console.log(data)
        socket.emit('resultado', data + ' - Guia de estudos Socket.io' )
    })
})

http.listen(3131, () => {
    console.log('App rodando!')
    console.log('http://localhost:3131')
})