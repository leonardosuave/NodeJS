const RespostaModel = require('../../database/Resposta')

class Responder {
    constructor(body) {
        this.corpo = body.corpo,
        this.perguntaID = body.pergunta
    }

    async envResposta() {
        await RespostaModel.create({
            corpo: this.corpo,
            perguntaID: this.perguntaID
        });
    };
};

module.exports = Responder