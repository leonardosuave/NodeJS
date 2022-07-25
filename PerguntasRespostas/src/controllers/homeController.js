const Pergunta = require('../../database/Pergunta')

exports.index = async (req, res) => {
    const perguntas = await Pergunta.findAll( {raw: true} )
    console.log(perguntas);
    
    res.render('index', {perguntas})
}