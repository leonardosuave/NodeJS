const categoryModel = require('../../database/category');
const Article = require('../models/articlesModels');

exports.indexCreate = async (req, res) => {

    const categories = await categoryModel.findAll({ raw: true , order: [
        ['createdAt', 'DESC']
    ]})

    res.render('admin/articles/new', {categories});
};

exports.create = async (req, res) => {

    try {
        const article = new Article(req.body);
        await article.createArticle();

        if(article.errors.length > 0) return res.redirect('/admin/articles/new')

        return res.redirect('/admin/categories');

    } catch(e) {
        console.log(e);
        return res.render('404')
    };
};