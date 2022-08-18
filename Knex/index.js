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

/* Relacionamento 1 para M
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
*/

/*Relacionamento Many to Many
database.table('games_estudios')
.innerJoin('game', 'game.id', 'games_estudios.game_id') //1° Join
.innerJoin('estudios', 'estudios.id', 'games_estudios.estudio_id') //2° Join
.where('game.id', 5) //Opcional
.then(data => {
    //Tratamento dos dados retornados.
    const game = {
        game_id: 0,
        estudios: []
    }

    game.game_id = data[0].game_id
    data.forEach(estudio => {
        game.estudios.push(estudio.name)
    })

    console.log(game)
}).catch(err => {
    console.log(err)
})
*/

//Transactions
async function testeTransacao() {

        try{
            await database.transaction(async trans => {
                await database.insert({nome: 'EA'}).table('estudios')
                await database.insert({nome: 'Activision'}).table('estudios')
                await database.insert({nome: 'PUBG CORP'}).table('estudios')
            })
        }catch(err) {
            console.log(err);
        }
}

testeTransacao()