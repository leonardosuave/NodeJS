const Login = require('../models/loginModels')

exports.index = (req, res) => {
    res.render('admin/users/loginRegister')
};

exports.register = async (req, res) => {
    try{
        const login = new Login(req.body)
        await login.register();

        if(login.errors.length > 0) {
            return res.redirect('/admin/users/login')
        }

        return res.redirect('/')

    } catch(e) {
        console.log(e)
        return res.render('404')
    }
};

exports.login = async (req, res) => {
    try {
        const login  = new Login(req.body)
        await login.login();

        if(login.errors.length > 0) {
            return res.redirect('/admin/users/login')
        }

        req.session.user = login.user
        res.redirect('/')

    } catch(e) {
        console.log(e)
        res.render('404')
    }
    
}

exports.logout = (req, res) => {
    req.session.user = undefined
    return res.redirect('/admin/users/login')
}