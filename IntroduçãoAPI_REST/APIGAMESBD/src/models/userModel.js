const LoginModel = require('../../database/login')
const validator = require('validator')
const bcryptjs = require('bcryptjs')

class User {
    constructor(body) {
        this.name = body.name,
        this.email = body.email,
        this.password = body.password,
        this.errors = []
    }

    async create() {
        this.validRegister()
        if(this.errors.length > 0) return;

        await this.userExist()
        if(this.errors.length > 0) return;

        const salt = bcryptjs.genSaltSync(10);
        this.password = bcryptjs.hashSync(this.password, salt)

        await LoginModel.create({
            name: this.name,
            email: this.email,
            password: this.password
        })
    }

    validRegister() {
        if(!validator.isEmail(this.email)) this.errors.push('E-mail inválido.');

        if(this.name.length < 5) this.errors.push('Nome inválido.');

        if(this.password.length < 5 || this.password.length > 12) this.errors.push('Senha inválida.')
    };

    async userExist() {
        const checkUser = await LoginModel.findOne({
            where: {
                email: this.email
            }
        })

        if(checkUser) this.errors.push('Este email ja foi registrado.')
    }

    async login() {
        this.validLogin()
        if(this.errors.length > 0) return false;

        const user = await LoginModel.findOne({
            where: {
                email: this.email
            }
        })

        if(!user) {
            this.errors.push('Usuário não existe.')
            return false;
        };

        if(!bcryptjs.compareSync(this.password, user.password)) {
            this.errors.push('Senha inválida')
            return false
        }

        return user
    }

    validLogin() {
        if(!validator.isEmail(this.email)) this.errors.push('E-mail inválido.');

        if(this.password.length < 5 || this.password.length > 12) this.errors.push('Senha inválida.')
    }
}

module.exports = User