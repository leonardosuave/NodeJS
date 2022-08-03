const express = require('express');
const app = express();
const path = require('path')
const connection = require('./database/database')

//Import routes
const homeRoute = require('./src/routes/homeRoute')
const categoriesRoute = require('./src/routes/categoryRoute')
const articlesRoute = require('./src/routes/articleRoute')
const loginRoute = require('./src/routes/loginRoute')

//Import relate tables and executy the create table
const ArticleModel = require('./database/article');
const CategoryModel = require('./database/category');
const UserModel = require('./database/login')

//view engine
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs'); 

app.use(express.static('public')) //conteúdo estático
app.use(express.urlencoded({extended:false}));
app.use(express.json())

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
app.use(loginRoute)

app.on('ready', () => {
    app.listen(8080, () => {
        console.log('Server online')
        console.log('http://localhost:8080')
    })
})