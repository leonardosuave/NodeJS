const ArticleModel = require('../../database/article');
const CategoryModel = require('../../database/category');


exports.index = async (req, res) => {
    const articles = await ArticleModel.findAll({ raw: true, order:[
        [ 'createdAt', 'DESC']
    ]});

    const categories = await CategoryModel.findAll({ raw: true, order: [
        ['createdAt', 'DESC']
    ]})

    res.render('index', { articles, categories });
}