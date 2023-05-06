var express = require('express');
var parseurl = require('parseurl');
var session = require('express-session');
var FileStore = require('session-file-store')(session)

var app = express()

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store:new FileStore()
}))

app.get('/', function(req, res, next){
    res.send("Hello session");
})

app.listen(3000, function(){
    console.log('3000!');
})