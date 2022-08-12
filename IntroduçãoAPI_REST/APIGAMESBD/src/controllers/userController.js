const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

exports.registerUser = async (req, res) => {
    try{
        const register = new User(req.body)
        await register.create()
    
        if(register.errors.length > 0) {
            res.status(400)
            res.json({erro: register.errors[0]})
        } else {
            res.sendStatus(200)
        }
    }catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
}

exports.login = async (req, res) => {
    const user = new User(req.body)
    const checkUser = await user.login()

    if(checkUser) {
        jwt.sign({id: checkUser.id, email: checkUser.email}, process.env.JWTsecret, {expiresIn: '48h'}, (erro, token) => {
            if(erro) {
                res.status(400);
                res.json({erro: 'Falha interna'})
            } else {
                res.status(200)
                res.json({token: token})
            }
        })
    } else {
        res.status(401)
        res.json({erro: user.errors})
    }
}