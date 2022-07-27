const Category = require('../models/categoriesModels')

exports.index = (req, res) => {
    res.render('admin/categories/new')
};

exports.create = async (req, res) => {

    const title = new Category(req.body)
    await title.createCategory();  

    if(title.errors.length > 0) {
        return res.redirect('/admin/categories/new')
    };

    return res.redirect('/')
};
