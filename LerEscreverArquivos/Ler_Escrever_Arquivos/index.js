const fs = require('fs');

//Para ler o arquivo especificado abaixo
fs.readFile('./usuario.json', {encoding: 'utf-8'} , (erro, dados) => {
    if(erro) {
        console.log(erro)
    } else {
        //Aqui vai ler o arquivo .json que esta em formato STRING
        //console.log(dados)

        //Para converter o TEXTO em OBJETO JS
        const conteudo = JSON.parse(dados)
        //console.log(conteudo)

        //Agora é possivel manipular os valores do objeto do arquivo que será lido.
        conteudo.nome = 'Tassiane Pinheiro'
        conteudo.curso = 'Formação Node.JS - Back-end'
        conteudo.categoria = 'Node.JS - Backend'
        //console.log(conteudo)

        fs.writeFile('./usuario.json', JSON.stringify(conteudo), (erro) => {
            if(erro) {
                console.log('Um erro aconteceu durante a escrita.')
            } else {
                console.log('Arquivo atualizado.')
            }
        })

    }
})

//JSON.parse() -> converte de string(texto) para objeto js(json)
//JSON.stringify() -> converte de objeto js para texto!