const Register = require('../models/userModel')
const User = require('../database/User')


exports.create = async (req, res) => {
    try {
        const register = new Register(req.body)
        await register.create()

        if(register.errors.length > 0) {
            
            res.status(register.status[0])
            res.json({erro: register.errors[0]})
            return;
        }

        res.sendStatus(200);

    }catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
}

exports.allUsers = async (req, res) => {
    try {
        const users = await Register.findAllUsers()
        res.json(users)

    }catch(err) {
        console.log(err)
    }
}

exports.userById = async (req, res) => {
    try{
        const user = await Register.findById(req.params.id)
        if(!user) {
            res.status(404)
            res.json({erro: 'Usuário não encontrado'})
        } else {
            
            res,status(200)
            res.json(user)
        }
        

    }catch(err) {
        console.log(err)
    }
}