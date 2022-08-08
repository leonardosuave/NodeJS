const fs = require('fs')
const path = require('path')

//Cria um arquivo neste caminho com o nome especificado no final do __dirname
const caminhoArquivo = path.resolve(__dirname, 'testeArquivo.json')

//Para escrever dentro do arquivo criado
fs.writeFile(caminhoArquivo, 'Meu nome é Leonardo e estou criando um arquivo com escrita em formato .txt\n', (err) => {
    if(err) {
        console.log(err)
    }
})

//Para ler o arquivo criado e escrito
fs.readFile('./testeArquivo.json', (erro, dados) => {
    if(erro) {
        console.log(erro)
    } else {
        console.log(dados)
    }
})