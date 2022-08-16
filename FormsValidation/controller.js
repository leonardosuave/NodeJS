const Forms = require('./module')

exports.index = (req, res) => {
    res.render('index')
}

exports.forms = (req, res) => {
    try {
        const form = new Forms(req.body);
        form.valid();
    
        if(form.errors.length > 0) {
            req.flash('errors', form.errors)
            return res.redirect('/')
        }

        req.flash('success', 'Dados enviados.')
        return res.send('/')

    } catch(e) {
        console.log(e)
        res.send('404')
    }

}