//Conexão com o banco de dados
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/aprendendoMongo", {useNewUrlParser: true, useUnifiedTopology: true})

//Carregamento do esquema
const articleModel = require('./article')

//Passa o nome do model e carrega o esquema a ser utilizado
const Article = mongoose.model('Article', articleModel) 

//Cria um novo artigo através do model, passando os dados na estrutura
/*const artigo = new Article({
    title: 'Aprendendo MySQL', 
    author: 'Udemy', 
    body: 'sddsaaaaswweesfk .......',
    special: true,
    resume: {
        content: 'Bla Bla Bla',
        author: 'teste!!!'
    }
});

//salva o artigo através de sua instância com o model e dados cadastrais
artigo.save().then(() => {
    console.log('Artigo salvo!')
}).catch(err => {
    console.log(err)
})
*/

//Listagem de todos os dados
Article.find({}).then(articles => {
    console.log(articles)
}).catch(err => {
    console.log(err)
})

//Listagem de um dado específico
Article.find({_id: '631283004ed5dcf9df584526'}).then(articles => {
    console.log(articles)
}).catch(err => {
    console.log(err)
})

//Para deletar um dado
Article.findByIdAndDelete('id de algum dado').then(() => {
    console.log('Dado removido!')
}).catch(err => {
    console.log(err)
})

//Para atualizar um dado
Article.findByIdAndUpdate('id do dado', {
    title: 'novo title', 
    author: 'novo autor'
}).then(() => {
    console.log('update')
}).catch(err => {
    console.log(err)
})