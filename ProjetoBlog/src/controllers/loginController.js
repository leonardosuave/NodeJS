const Register = require('../models/loginModels')

exports.index = (req, res) => {
    res.render('admin/users/loginRegister')
};

exports.register = async (req, res) => {
    try{
        const login = new Register(req.body)
        await login.register();

        if(login.errors.length > 0) {
            return res.redirect('/admin/users/login')
        }

        return res.redirect('/')

    } catch(e) {
        console.log(e)
        return res.render('404')
    }
}