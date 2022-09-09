//Arquivo com aplicativo de instância.

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({success: true})
})

app.get('/cor/:pessoa', (req, res) => {
    const pessoa = req.params.pessoa

    if(pessoa == 'leonardo') {
        res.json({color: 'blue', cor: 'azul'})
    }
})

module.exports = app