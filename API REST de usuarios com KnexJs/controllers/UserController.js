const Register = require('../models/userModel')
const PasswordToken = require('../models/PasswordToken')
const User = require('../database/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

//secret é ideal armazenar em um arquivo separado -> .env
const secret = 'siajuweqpasmkauqwqsuqjjsppqppwomanuqdnwu'


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

exports.delete = async (req, res) => {
    try{
        const user = await Register.delete(req.params.id)
        if(!user.status) {
            res.status(user.statusError)
            res.json(user.errors)
            return
        }

        res.sendStatus(200)
    }catch(erro) {
        console.log(erro)
        res.status(500)
    }
}

exports.recoverPassword = async (req, res) => {
    const result = await PasswordToken.create(req.body.email) //Este método dentro de uma nova class poderia ser feito tudo neste arquivo através do metodo create() dentro do userModel

    if(result.status) {
        //console.log(result.token)
        res.status(200);
        res.send('' + result.token) //token so é gerado através de string no send()

    } else {
        res.status(result.statusError)
        res.send(result.errors)
    }
}

exports.changePassword = async (req, res) => {

    const token = req.body.token;
    const password = req.body.password

    //Checa se o token ja foi utilizado
    const isTokenValid = await PasswordToken.validate(token)  
    
    if(isTokenValid.status) {
        //Se não tiver sido utilizado vai trocar a senha 
        await User.changePassword(password, isTokenValid.token.user_id, isTokenValid.token.token)

        res.status(200)
        res.send('Senha alterada!')

    } else {
        res.status(isTokenValid.statusError)
        res.send(isTokenValid.errors)
    }
}

exports.login = async (req, res) => {

    //Encontrar se este email esta cadastrado no BD
    const user = await Register.findByEmail(req.body.email)

    if(user != undefined) {

        //Checar se a senha enviada equivale a senha do BD para o email solicitado.
        const result = await bcryptjs.compare(req.body.password, user.password)

        if(result) {

            //Se a senha for igual a senha do email solicitado sera gerado o token de acesso.
            jwt.sign({id: user.id, email: user.email, role: user.role}, secret, {expiresIn: '48h'}, (err, token) => {

                if(err) {
                    res.status(400)
                    res.json({err: 'Falha interna'})
                    return
                } else {
                    res.status(200)
                    res.json({token: token})
                }
            })
        } else {
            res.status(406)
            res.json({status: 'Senha incorreta.'})
            return
        }   
    } else {
        res.status(406)
        res.send('Este e-mail não está cadastrado no sistema.')
    }

}