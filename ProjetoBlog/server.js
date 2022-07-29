const express = require('express');
const app = express();
const path = require('path')
const connection = require('./database/database')

//Import routes
const homeRoute = require('./src/routes/homeRoute')
const categoriesRoute = require('./src/routes/categoryRoute')
const articlesRoute = require('./src/routes/articleRoute')

//Import relate tables
const ArticleModel = require('./database/article');
const CategoryModel = require('./database/category');

//view engine
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs'); 

app.use(express.static('public')) //conteúdo estático
app.use(express.urlencoded({extended:false}));

//Conection DB
connection
    .authenticate()
    .then(() => {
        console.log('Data Base connected!')
        app.emit('ready')
    }).catch((error) =>{
        console.log(error)
    })  

//express with imports routes    
app.use(homeRoute)
app.use(categoriesRoute)
app.use(articlesRoute)

app.on('ready', () => {
    app.listen(8080, () => {
        console.log('Server online')
        console.log('http://localhost:8080')
    })
})