const categoryModel = require('../../database/category')
const articleModel = require('../../database/article')
const slugify = require('slugify')

exports.indexCreate = async (req, res) => {

    const categories = await categoryModel.findAll({ raw: true , order: [
        ['createdAt', 'DESC']
    ]})

    res.render('admin/articles/new', {categories});
};

