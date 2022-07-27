const express = require('express');
const app = express();
const path = require('path')
const connection = require('./database/database')
const csrf = require('csurf')
const { checkCsrfError, csrfMiddleware } = require('./src/middleware/middlewares')

//Import routes
const homeRoute = require('./src/routes/homeRoute')
const categoriesRoute = require('./src/routes/categoryRoute')

//Import relate tables
const Article = require('./src/models/article');
const Category = require('./src/models/category');

//view engine
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs'); 

app.use(express.static('public')) //conteúdo estático
app.use(express.urlencoded({extended:false}));

//Import use csrfToken in forms
app.use(csrf());
app.use(checkCsrfError);
app.use(csrfMiddleware);  

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

app.on('ready', () => {
    app.listen(8080, () => {
        console.log('Server online')
        console.log('http://localhost:8080')
    })
})