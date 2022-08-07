const fs = require('fs')
const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'testeArquivo.json')

fs.writeFile(caminhoArquivo, 'Meu nome é Leonardo e estou criando um arquivo com escrita em formato .txt\n', (err) => {
    if(err) {
        console.log(err)
    }
})

fs.readFile('./testeArquivo.json', (erro, dados) => {
    if(erro) {
        console.log(erro)
    } else {
        console.log(dados)
    }
})