const Register = require('../models/userModel')
const knex = require('../database/connection')


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
            
            res.status(200)
            res.json(user)
        }
        

    }catch(err) {
        console.log(err)
    }
}

exports.edit = async (req, res) => {

    try{
        const {id, name, email, role} = req.body
        const user = await Register.update(id, name, email, role)

        if(!user.status){
            res.status(user.statusError)
            res.json(user.errors)
            return;
        }
    
        res.sendStatus(200)
    }catch(e) {
        console.log(e)
        res.status(500)
    }
}