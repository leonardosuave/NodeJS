const User = require('./userModel')
const knex = require('../database/connection')  //Para checar contas existentes no DB

class PasswordToken{

    //Forma de criar token de recuperação de senha 
    async create(email){
        const user = await User.findByEmail(email)
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
}

module.exports = new PasswordToken