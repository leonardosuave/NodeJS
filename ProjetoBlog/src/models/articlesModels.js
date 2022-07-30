const CategoryModel = require('../../database/category');
const ArticleModel = require('../../database/article');
const slugify = require('slugify');

class Article {
    constructor(body) {
        this.title = body.article,
        this.body = body.bodyArticle,
        this.category = body.category,
        this.errors = [];
    }

    async createArticle() {
        this.valid();
        if(this.errors.length > 0) return;

        
        await this.articleExist()
        if(this.errors.length > 0) return;
        

        await ArticleModel.create({
            title: this.title,
            slug: slugify(this.title),
            body: this.body,
            categoryId: this.category
        });
    }

    valid() {
        if(this.title === 'undefined') return this.errors.push('Titulo de artigo inválido.');
        if(this.title.length <= 6) return this.errors.push('O titulo do artigo deve ter acima de 6 letras.');
        return;
    };

    //Checar posteriormente para primeiro filtrar a categoria e depois checar se existe artigo de mesmo nome cadastrado nesta categoria.
    
    async articleExist() {
        const articleExist = await ArticleModel.findOne({
            where: {categoryId: this.category, title: this.title}
        });
        //console.log(articleExist)
        if(articleExist) return this.errors.push('Esse artigo ja está registrado nessa categoria.');
        return;
    }

}

module.exports = Article;