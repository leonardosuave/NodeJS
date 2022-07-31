const categoryModel = require('../../database/category');
const articleModel = require('../../database/article');
const Article = require('../models/articlesModels');
const CategoryModel = require('../../database/category');

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
};

exports.slugAccess = async (req, res) => {
    const articleAccess = await Article.slug(req.params.slug)
    if(!articleAccess) return res.redirect('/')

    const categories = await CategoryModel.findAll({ raw: true, order: [
        ['createdAt', 'desc']
    ]})
    if(!categories) return res.redirect('/')

    res.render('article', {articleAccess, categories})
}

exports.loadArticle = async (req, res) => {
    if(!req.params.id) return res.render('404');

    const loadArticle = await Article.load(req.params.id);
    if(!loadArticle) return res.render('404');

    const categories = await categoryModel.findAll({ raw: true , order: [
        ['createdAt', 'DESC']
    ]})


    res.render('admin/articles/edit', {loadArticle, categories})
};

exports.updateArticle = async (req, res) => {
    try {
        if(!req.params.id) return res.render('404');

        const updateArticle = new Article (req.body)
        await updateArticle.edit(req.params.id)

        res.send('/admin/articles');

    } catch(e) {
        console.log(e);
        res.render('404')
    }
}