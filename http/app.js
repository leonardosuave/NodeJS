const http = require('http');

http.createServer((req, res) => {
    res.end('<h1>Bem vindo ao meu site!</h1>')
}).listen(8181);

console.log('Meus servidor está rodando!')
console.log('http://localhost:8181')
