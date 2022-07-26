const express = require('express')
const app = express();
const cors = require('cors')
const jwt = require('jsonwebtoken')

//Senha para criptografar
const JWTsecret = 'soiqlkqmweapapajkwmjsfdyhshajjwunngccrwaqiyyutuweeew'

app.use(cors())
app.use(express.urlencoded({extended:false}));
app.use(express.json())

//Middleware
function auth(req, res, next) {
    const authToken = req.headers['authorization']   
    //console.log(authToken) -> Verá bearer + o token de validação
    if(authToken != undefined) {

        const bearer = authToken.split(' ') //Para separar o bearer do token de validação
        const token = bearer[1] //Para utilizar apenas o token de validação

        jwt.verify(token, JWTsecret, (erro, data) => {
            if(erro) {
                res.status(401);
                res.json({erro: 'Token inválido'})
            } else {
                //console.log(data) -> Retorna o conteúdo do token, sendo id, email, quando foi gerado e data de expiração do token.

                //Criar essas duas variáveis dentro do objeto de req dentro do middleware -> É importante para poder acessar essa duas variáveis dentro de qualquer endPoint que utilize este middleware
                req.token = token;
                req.loggedUser = {id: data.id, email: data.email} // informação do usuario logado
                next() 
            }
        })

    } else {
        res.status(401)
        res.json({erro:'Token inválido'})
    }
    
}

//Banco de dados falso em JSON(pode substituir por mysql posteriormente)
let BD = {

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
    ], 
    users: [
        {
        id: 1,
        name: 'Leonardo Suave',
        email: 'leonardo.suave15@hotmail.com',
        password: 'palmeiras'
    },
    {
        id: 2,
        name: 'Tassiane Pinheiro',
        email: 'tassiane_pinhei@hotmail.com',
        password: 'palmeiras'
    }
    ]


}

app.post('/auth', (req, res) => {
    const {email, password} = req.body

    if(email != undefined) {

        const user = BD.users.find( u => u.email == email) //Se encontrar um usuário significa que o email enviado na req está cadastrado

        if(user != undefined) {
            if(user.password == password) {
                //Cria a assinatura jwt. 
                //O primeiro termo passa informações essenciais do usuário ->PayLoad
                //É uma função assincrona, por isso o callback(err,token)
                jwt.sign({id: user.id, email: user.email}, JWTsecret, {expiresIn: '48h'}, (erro, token) => {
                    if(erro) {
                        res.status(400);
                        res.json({erro: 'Falha interna'})
                    } else {
                        res.status(200);
                        res.json({token: token})
                    }
                })
            } else {
                res.status(401);
                res.json({erro: 'Credenciais inválidas!'})
            }
        } else {
            res.status(404);
            res.json('O email não está registrado.')
        }
    } else {
        res.status(400);
        res.json('Email inválido')
    }
})

app.get('/games', auth, (req, res) => {
    res.statusCode =200; //Status de success
    res.json(BD.games);
});

app.get('/game/:id', auth, (req, res) => {

    //Necessário verificar se id é um número
    if(isNaN(req.params.id)) {
        
        res.sendStatus(400); //Status que se enquadra aqui.
    } else {
        const id = parseInt(req.params.id)

        //Método de pesquisa por callback
        const game = BD.games.find(g => g.id ==id)  //Pode ser feito por Async/Await caso utilize controlls nas rotas endPoint

        if(game != undefined) {
            res.statusCode(200)
            res.json(game)
        } else {

            res.sendStatus(404)
        }
        
    }
    
});

app.post('/game', auth, (req, res) => {
    const {title, year, produtora, price} = req.body

    if(!title || !produtora) {
        res.sendStatus(400)

    } else if (isNaN(year) || isNaN(price)) {
        res.sendStatus(400)
    } else {
        const year = parseInt(req.body.year)
        const price = parseInt(req.body.price)

        BD.games.push({
            id: 11,
            title,
            year, 
            produtora,
            price
        })

        res.sendStatus(200)
    }
});

app.delete('/game/:id', auth, (req, res) => {
    if(isNaN(req.params.id)) {
        res.sendStatus(400)
    } else {
        const id = parseInt(req.params.id)

        const index = BD.games.findIndex(g => g.id == id)

        if(index == -1) {
            res.sendStatus(404)
        } else {
            BD.games.splice(index, 1)
            res.sendStatus(200)
        }
    }
});

app.put('/game/:id', auth, (req, res) => {

    if(isNaN(req.params.id)) {
        res.sendStatus(400)
    } else {
        const id  = parseInt(req.params.id)
        const game = BD.games.find(g => g.id == id)

        if(game != undefined) {

            const {title, year, produtora, price} = req.body

            if(title != undefined) {

                if(!title) {
                    res.sendStatus(400)
                }

                game.title = title
            }

            if(year != undefined) {

                if (isNaN(year)) {
                    res.sendStatus(400)

                }
                  
                game.year = year
            }

            if(produtora != undefined) {

                if(!produtora) {
                    res.sendStatus(400)
                }    

                game.produtora = produtora
            }

            if(price != undefined) {

                if (isNaN(price)) {
                    res.sendStatus(400)
                }    
                
                game.price = price
            }

            res.sendStatus(200)

        } else {
            res.sendStatus(404)
        }
    }
})

app.listen(3031, ()=> {
    console.log('API RODANDO!')
    console.log('http://localhost:3031')
})