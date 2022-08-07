const fs = require('fs')
const path = require('path')
const caminhoArquivo = path.resolve(__dirname,'..', 'testeArquivo.txt')

fs.readFile('./leonardo.json', {encoding: 'utf-8'}, (erro, dados) => {

    if(erro) {
        console.log('Ocorreu uma falaha durante a leitura do arquivo')
    } else {
        console.log(dados)
    }
    
});

fs.writeFile(caminhoArquivo, 'Meu nome é Leonardo e estou criando um arquivo com escrita em formato .txt\n', {flag: 'w'})