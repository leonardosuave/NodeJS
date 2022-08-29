const knex = require('./connection')
const bcryptjs = require('bcryptjs')
const PasswordToken = require('../models/PasswordToken')

class User {
    async new(name, email, password) {

        try{
            const hash = await bcryptjs.hash(password, 10)
            await knex.insert({name, email, password: hash, role: 0}).table("users")
        }catch(erro) {
            console.log(erro)
        }
    }

    async changePassword(newPassword, id, token) {
        const hash = await bcryptjs.hash(newPassword, 10) 
        await knex.update({password: hash}).where({id: id}).table('users')
        await PasswordToken.setUsed(token) //Para setar valor 1 no used do token
    }
}

module.exports = new User