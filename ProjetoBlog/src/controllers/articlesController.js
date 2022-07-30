const categoryModel = require('../../database/category');
const articleModel = require('../../database/article');
const Article = require('../models/articlesModels');

exports.index = async (req, res) => {
    const articles = await articleModel.findAll({
        include: [{model: categoryModel}]
    });

    res.render('admin/articles/index', { articles });
}

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

        return res.redirect('/admin/articles');

    } catch(e) {
        console.log(e);
        return res.render('404')
    };
};

exports.delete = async (req, res) => {
    const deleteArticle = await Article.delete(req.params.id)
    if(!deleteArticle) return res.render('404');

    res.redirect('/admin/articles')
}