const database = require('./database')

const dados = {
    nome: 'Resident Evil 3 - NEMESIS',
    price: 37.5
}

//Retorna uma promisse
const dado = database.insert(dados).into('game')
console.log(dado)
