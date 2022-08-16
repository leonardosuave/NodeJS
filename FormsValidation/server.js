const express = require('express')
const session = require('express-session')
const flashMessages = require('express-flash')
const routes = require('./routes')

const app = express()
app.use(express.urlencoded({extended:false}));
app.use(express.json())

//view engine
app.set('view engine', 'ejs')

//Session
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'Qualquer coisa pode ser', 
    cookie: {maxAge: 1000*60*60}
}))
app.use(flashMessages())

app.use(routes)


app.listen(3033, () =>{
    console.log('Server online')
    console.log('http://localhost:3033')
})