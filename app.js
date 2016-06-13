var express = require('express')

var multer = require('multer')
var upload = multer({dest: 'uploads/'})
const crypto = require('crypto');



var app = express()
app.use(express.static('public'))
app.engine('html', require('ejs').renderFile)
app.get('/', home)
app.get('/register.html', register)
app.post('/register.html', upload.fields([{ name: 'fullname', maxCount: 50 }, { name: 'email', maxCount: 50 }, { name: 'password', maxCount:20}]))
app.post('/register.html', registerNewUser)
app.listen(8080)



function home(req, res){
    res.render('index.html')
}

function register(req, res){
    res.render('register.html')
}

function registerNewUser(req, res, next){
    console.log(req.body.password)
    console.log(encode(req.body.password))
    res.redirect('/')
}
function encode(password){
    return crypto.createHmac('sha512', password).update('More encoding key').digest('hex')
}