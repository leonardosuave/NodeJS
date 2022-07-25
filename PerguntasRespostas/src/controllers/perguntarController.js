const Perguntar = require('../models/perguntarModel'); //Tratamento de dados por model da controladora 

exports.index = (req, res) => {
    res.render('perguntar')
}

exports.perguntar = async (req, res) =>  {
    const perguntar = new Perguntar(req.body)
    await perguntar.enviar()

    res.redirect('/')
}