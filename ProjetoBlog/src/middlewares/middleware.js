exports.loginRequired = (req, res, next) => {
    if(!req.session.user) {
        res.redirect('/admin/users/login')
        return;
    }
    next()
};