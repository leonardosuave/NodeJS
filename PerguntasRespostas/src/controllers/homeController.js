const Pergunta = require('../../database/Pergunta')

exports.index = async (req, res) => {
    const perguntas = await Pergunta.findAll( {raw: true, order:[
        ['updatedAt', 'DESC'] // 'Campo do BD'| 'DESC' = decrescente; 'ASC' = crescente
    ]} );
   
    res.render('index', {perguntas})
}