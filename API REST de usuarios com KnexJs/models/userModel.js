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

    static async update(id, name, email, role) {

        const result = {
            status: 0,
            errors: 0
        }

        const user = await knex.select(['id', 'name', 'email', 'role']).where({id: id}).table('users')

        if(user != undefined) {
            const editUser = {}
    
            if(email != undefined) {
                if(validator.isEmail(email)) {
                    if(email != user.email) {
                        const checkEmail = await knex.select('*').from('users').where({email: email});

                        if(checkEmail.length == 0){
                            editUser.email = email
    
                        } else {
                            result.status = 406
                            result.errors = 'Email ja cadastrado'
                            return {status: false, errors: result.errors, statusError: result.status}
                        }
                    };
                } else {
                    result.status = 400
                    result.errors = 'E-mail inválido.'
                    return {status: false, errors: result.errors, statusError: result.status}
                }
            };
    
            if(name != undefined) editUser.name = name //edit name
            if(role != undefined) editUser.role = role //edit role


            await knex.update(editUser).where({id: id}).table('users') //edit email
            return {status: true}
            
        } else {
            result.status = 404
            result.errors = 'O usuário não existe.'
            return {status: false, errors: result.errors, statusError: result.status}
        }
    }
}

module.exports = Register