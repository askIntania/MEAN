var express = require('express')
var app = express()
app.engine('html', require('ejs').renderFile)
app.get('/', home)
app.get('/register.html', register)
app.listen(8080)


function home(req, res){
    res.render('index.html')
}

function register(req, res){
    res.render('register.html')
}