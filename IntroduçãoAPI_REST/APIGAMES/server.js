const express = require('express')
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json())

//Banco de dados falso em JSON(pode substituir por mysql posteriormente)
const BD = {

    games: [
        {
            id: 25,
            title: 'Resident Evil 4 Remake',
            year: 2023,
            produtora: 'CAPCON',
            price: 200
        },
        {
            id: 21,
            title: 'Call of Duty MW2',
            year: 2022,
            produtora: 'Activision',
            price: 250
        },
        {
            id: 35,
            title: 'Silent Hill',
            year: 2023,
            produtora: 'KONAMI',
            price: 190
        },
        {
            id: 7,
            title: 'Project Zomboid',
            year: 2013,
            produtora: 'Studio Indie',
            price: 25
        }
    ]


}

app.get('/games',(req, res) => {
    res.statusCode = 200; //Status de success
    res.json(BD.games);
});

app.get('/game/:id', (req, res) => {

    //Necessário verificar se id é um número
    if(isNaN(req.params.id)) {
        
        res.sendStatus(400); //Status que se enquadra aqui.
    } else {
        const id = parseInt(req.params.id)

        //Método de pesquisa por callback
        const game = BD.games.find(g => g.id ==id)  //Pode ser feito por Async/Await caso utilize controlls nas rotas endPoint

        if(game != undefined) {
            res.statusCode = 200
            res.json(game)
        } else {

            res.sendStatus(404)
        }
        
    }
    
})

app.listen(3030, ()=> {
    console.log('API RODANDO!')
    console.log('http://localhost:3030')
})