const Category = require('../models/categoriesModels')
const CategoryModel = require('../../database/category');

exports.index = async (req, res) => {
    const categories = await CategoryModel.findAll({ raw: true, order:[
        ['createdAt', 'DESC']
    ]});

    res.render('admin/categories/index', {categories})
}

exports.indexCreate = (req, res) => {
    res.render('admin/categories/new')
};

exports.create = async (req, res) => {

    const title = new Category(req.body)
    await title.createCategory();  

    if(title.errors.length > 0) {
        return res.redirect('/admin/categories/new')
    };

    return res.redirect('/admin/categories')
};

exports.delete = async (req, res) => {
    if(!req.params.id) return res.render('404');

    //Feito por função estática
    const CategoryDeleted = await Category.delete(req.params.id);
    if(!CategoryDeleted) return res.render('404');

    res.redirect('/admin/categories')
}
