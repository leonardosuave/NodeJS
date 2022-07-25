const Perguntar = require('../models/perguntarModel'); //Tratamento de dados por model da controladora 

const perguntaModel = require('../../database/Pergunta') //Para acessar o banco de dados caso seja tratado os dados apenas na controladora diretamente (pergunta.Controller.responder)

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

    if(perguntaBD != undefined) {
        res.render('responder', {perguntaBD})
    } else {
        res.render('404')
    };
};
