var bodyParser = require('body-parser')
var express = require("express")
var app = express()
var routes = require("./routes/routes")
 
app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.use(routes);

app.listen(3333,() => {
    console.log("Servidor rodando")
    console.log('http://localhost:3333')
});
