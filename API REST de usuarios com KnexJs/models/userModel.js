const knex = require('../database/connection')  //Para checar contas existentes no DB
const User = require('../database/User')        //Para enviar dados de registro de usuários ao DB 
const validator = require('validator')          //Validar email


class Register {
    constructor(body) {
        this.name = body.name,
        this.email = body.email,
        this.password = body.password,
        this.errors = [],
        this.status = []
    }

    async create() {
        this.validRegister()
        if(this.errors.length > 0) return;

        await this.userExist()
        if(this.errors.length > 0) return;

        await User.new(this.name, this.email, this.password);
    }

    validRegister() {

        if(!validator.isEmail(this.email)) {
            this.errors.push('E-mail inválido.');
            this.status.push(400);
        };

        if(this.name.length < 5) {
            this.errors.push('Nome inválido.');
            this.status.push(400);
        };

        if(this.password.length < 5 || this.password.length > 12) {
            this.errors.push('Senha inválida.');
            this.status.push(400);
        } 
    }

    async userExist() {

        //Retorna um array com email encontrado
        const checkUser = await knex.select('*').from('users').where({email: this.email})

        if(checkUser.length > 0) {
            this.errors.push('Este email ja foi registrado.');
            this.status.push(406);
        } 
    }

    static async findAllUsers() {
        return await knex.select(['id', 'name', 'email', 'role']).table('users')
    }

    static async findById(id) {
        const user = await knex.select(['id', 'name', 'email', 'role']).where({id: id}).table('users')
        
        if(user.length > 0) {
            return user[0]
        } else {
            return undefined
        }
    }
}

module.exports = Register