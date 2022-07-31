const ArticleModel = require('../../database/article');

exports.index = async (req, res) => {
    let offset = 0
    let quant = 4 //Qt de artigos por pagina

    if(isNaN(req.params.num) || req.params.num >= 1) {
        offset = (parseInt(req.params.num) -1) * quant;
    } 

    const articlePage = await ArticleModel.findAndCountAll({
        limit: quant,
        offset: offset
    })

    let next;
    if(offset + 4 >= articlePage.count) {
        next = false;
    } else {
        next = true;
    };

    let result = {
        next: next,
        articlePage: articlePage
    }

    res.json(result)
}