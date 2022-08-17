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

/*ORDER by
database.select('*').table('game').orderBy('price', 'desc').then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

/*Associated Insert
database.insert({
    name: 'KONAMI',
    game_id: 4

}).table('estudios').then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

//Associated Insert with WHERE
database.select('game.*', 'estudios.name as estudio_nome').table('game').innerJoin('estudios', 'estudios.game_id', 'game.id').then(data => {
    const estudiosGamesArray = data;
    const game = {
        id: 0,
        nome: '',
        estudios: []
    }

    //Sobrescreve os dados do objeto game.
    game.id = data[0].id;
    game.nome = data[0].name;

    data.forEach(estudio => {
        game.estudios.push(estudio.estudio_nome)
    })

    console.log(game)
    
}).catch(err => {
    console.log(err)
})
