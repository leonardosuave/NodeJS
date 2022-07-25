const perguntaModel = require('../../database/Pergunta')

class Perguntar {
    constructor(body) {
        this.titulo = body.titulo,
        this.descricao = body.descricao
    };

    async enviar() {
        await perguntaModel.create({
            titulo: this.titulo,
            descricao: this.descricao
        });
    }
};

module.exports = Perguntar;