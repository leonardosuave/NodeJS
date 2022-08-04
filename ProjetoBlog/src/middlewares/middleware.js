exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors')
    res.locals.success = req.flash('success')
    res.locals.user = user = req.session.user

    next()
}

exports.loginRequired = (req, res, next) => {
    if(!req.session.user) {
        res.redirect('/admin/users/login')
        return;
    }
    next()
};