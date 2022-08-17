const database = require('./database')
/*
const dados = [
    {
    name: 'Resident Evil 2 - Remake',
    price: 85
    },
    {
    name: 'Resident Evil 4 - Remake',
    price: 120
    },
    {
    name: 'Resident Evil 8',
    price: 75
    }
]

//Retorna uma promisse
database.insert(dados).into('game').then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

/* SELECT
database.select(['id', 'price']).table('game').then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

/*NESTED QUERIES -> Uma query de busca dentro de outra query de cadastro
database.insert({name: 'Silent Hill', price: 27.5}).into('game').then(data => {
    database.select('*').table('game').then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
}).catch(err => {
    console.log(err)
})
*/

/*WHERE
database.select('*').whereRaw('price < 50').table('game').then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

/*DELETE
database.where({id: 3}).delete().table('game').then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

/*UPDATE
database.where({name: 'Silent Hill'}).update({price: 12.5}).table('game').then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

//ORDER by

database.select('*').table('game').orderBy('price', 'desc').then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})