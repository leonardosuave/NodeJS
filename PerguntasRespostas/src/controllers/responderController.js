const Responder = require('../models/responderModel'); //Tratamento de dados por model da controladora 

exports.enviarResposta = async (req, res) => {
    const responder = new Responder(req.body)
    await responder.envResposta();
    res.redirect(`/perguntar/${req.body.pergunta}`)
}

    