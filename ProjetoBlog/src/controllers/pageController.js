const ArticleModel = require('../../database/article');
const CategoryModel = require('../../database/category');

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
        page: parseInt(req.params.num), //Para saber qual pag está.
        next: next,
        articlePage: articlePage
    }

    //console.log(result)
    
    //Enviar as categories pq o render page trabalha com homenavbar que possui categories 
    const categories = await CategoryModel.findAll()

    res.render('admin/articles/page', {result, categories});
}