const fs = require('fs')

//Para ler o arquivo do endereço abaixo.
fs.readFile('./leonardo.json', {encoding: 'utf-8'}, (erro, dados) => {

    if(erro) {
        console.log('Ocorreu uma falaha durante a leitura do arquivo')
    } else {
        console.log(dados)
    }
    
});
