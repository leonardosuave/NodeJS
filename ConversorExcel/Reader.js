const fs = require('fs')

class Reader {


    //Método de ler arquivo
    static Read(filepath) {

        fs.readFile(filepath, {encoding: 'utf-8'}, (erro, dados) =>{
            if(erro) {
            console.log(erro)
            } else {
            console.log(dados)
            }
        })

    }
}

module.exports = Reader