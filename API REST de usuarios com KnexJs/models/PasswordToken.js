const User = require('./userModel')
const knex = require('../database/connection')  //Para checar contas existentes no DB

class PasswordToken{

    //Forma de criar token de recuperação de senha 
    async create(email){
        const user = await User.findByEmail(email) //Método no model Usermodel
            if(user != undefined) {
                
                try{
                    const token = Date.now()
                    await knex.insert({
                        user_id: user.id,
                        used: 0,
                        token: token //forma rápida. -> melhor forma seria pelo UUID
                    }).table('passwordtokens')

                    return {status: true, token: token}

                }catch(err){
                    console.log(err)
                    return {status: false, err: err, statusError: 500}
                }


            } else {
                return {status: false, errors: 'Este e-mail não existe no banco de dados.', statusError: 406}
            }
    }

    async validate(token) {

        try{
            const result = await knex.select().where({token: token}).table('passwordtokens')

            if(result.length > 0) {
                const tk = result[0]

                //Se used for igual a 1
                if(tk.used) {
                    return {status: false, errors: 'Token inválido', statusError: 406}
                } else {
                    return {status: true, token: tk}
                }
            } else {
                return {status: false, errors: 'Token não encontrado', statusError: 406}
            }

        }catch(err) {
            console.log(err)
            return {status: false, err: err, statusError: 500}
        }

    }

    async setUsed(token) {
        await knex.update({used: 1}).where({token: token}).table('passwordtokens')
    }
}

module.exports = new PasswordToken