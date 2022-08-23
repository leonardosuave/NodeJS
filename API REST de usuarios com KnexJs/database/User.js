const knex = require('./connection')
const bcryptjs = require('bcryptjs')

class User {

    async new(name, email, password) {

        try{
            const hash = await bcryptjs.hash(password, 10)
            await knex.insert({name, email, password: hash, role: 0}).table("users")
        }catch(erro) {
            console.log(erro)
        }
    }
}

module.exports = new User