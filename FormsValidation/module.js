const validator = require('validator')

class Forms {
    constructor(body) {
        this.email = body.email,
        this.name = body.nome,
        this.points = body.pontos,
        this.errors = []
    }

    valid() {
        
        if(!validator.isEmail(this.email)) this.errors.push('E-mail inválido');

        if(!this.name) this.errors.push('Nome não pode estar vazio.');
        if(this.name.length < 4) this.errors.push('Nome inválido. Insira um nome com 4 caracteres ou mais.');

        if(!this.points) this.errors.push('Pontos não pode estar vazio.');
        if(this.points <= 25) this.errors.push('Quantidade de pontos inválido. Necessário acima de 25 pontos');

    }
}


module.exports = Forms