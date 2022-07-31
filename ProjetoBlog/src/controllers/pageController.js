const ArticleModel = require('../../database/article');

exports.index = async (req, res) => {
    let offset = 0
    if(isNaN(req.params.num) || req.params.num == 1) {
        offset = 0
    } else {
        offset = parseInt(req.params.num) * 2;

    }

    const articlePage = await ArticleModel.findAndCountAll({
        limit: 2,
        offset: offset
    })
    res.json(articlePage)
}