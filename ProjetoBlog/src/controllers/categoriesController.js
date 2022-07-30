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

    try {
        const title = new Category(req.body)
        await title.createCategory();  
    
        if(title.errors.length > 0) {
            return res.redirect('/admin/categories/new')
        };
    
        return res.redirect('/admin/categories')

    }catch(e) {
        console.log(e)
        return res.render('404')
    };
    
};

exports.delete = async (req, res) => {
    if(!req.params.id) return res.render('404');

    //Feito por função estática
    const CategoryDeleted = await Category.delete(req.params.id);
    if(!CategoryDeleted) return res.render('404');

    res.redirect('/admin/categories')
};

exports.loadCategory = async (req, res) => {
    if(!req.params.id) return res.render('404');

    const loadCategory = await Category.load(req.params.id);
    if (!loadCategory) return res.render('404');

    res.render('admin/categories/edit', {loadCategory});
}

exports.updateCategory = async (req, res) => {
    if(!req.params.id) return res.render('404');

    try {
        const editTitle = new Category(req.body);
        await editTitle.edit(req.params.id);
    
        res.redirect('/admin/categories')

    } catch(e) {
        console.log(e);
        res.render('404')
    }
};
