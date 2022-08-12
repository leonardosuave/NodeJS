const jwt = require('jsonwebtoken')

exports.auth = (req, res, next) => {
    const authToken = req.headers['authorization']
    //console.log(authToken)
    
    if(authToken != undefined) {

        const beared = authToken.split(' ')
        const token = beared[1]

        jwt.verify(token, process.env.JWTsecret, (erro, data) => {
            if(erro) {
                res.status(401);
                res.json({erro: 'Token inválido'})
            } else {
                req.token = token
                req.loggedUser = {id: data.id, email: data.email}

                next()
            }
        })
    } else {
        res.status(401)
        res.json({erro: 'Token inválido'})
    }
}