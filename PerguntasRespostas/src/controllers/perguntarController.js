const Perguntar = require('../models/perguntarModel'); //Tratamento de dados por model da controladora 

const perguntaModel = require('../../database/Pergunta') //Para acessar o banco de dados caso seja tratado os dados apenas na controladora diretamente (pergunta.Controller.responder)
const RespostaModel = require('../../database/Resposta');

exports.index = (req, res) => {
    res.render('perguntar')
}

exports.perguntar = async (req, res) =>  {
    const perguntar = new Perguntar(req.body)
    await perguntar.enviar()

    res.redirect('/')
}

exports.responderPergunta = async (req, res) => {
    const perguntaBD = await perguntaModel.findOne({
        where: {id: req.params.id}
    });

    if(perguntaBD !== undefined) {
        const respostaBD = await RespostaModel.findAll({
            where: {perguntaID: perguntaBD.id}, raw: true, order:[
                ['createdAt', 'DESC'] //Se for encontrado o perguntaBD então sera verificado se existe alguma resposta referente a esta pergunta.
        ]})
        console.log(respostaBD)

        res.render('responder', {perguntaBD, respostaBD})
    } else {
        res.render('404')
    };
};
