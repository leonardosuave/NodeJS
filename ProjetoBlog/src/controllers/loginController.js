exports.index = (req, res) => {
    res.render('admin/users/loginRegister')
};

exports.register = (req, res) => {
    res.json({email: req.body.email, nome: req.body.name, sobrenome: req.body.lastName, password: req.body.password})
}