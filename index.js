var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var config = require('./config');
var cartCtrl = require('./public/cartCtrl');
var cors = require('cors');

var app = express();

app.use(express.static('public'));
app.use('/node_modules', express.static('node_modules'));
app.use(session({
    secret: config.secret,
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));
//
app.post('/api/cart', cartCtrl.addProduct);
app.get('/api/cart', cartCtrl.get);

app.listen(3000, function() {
    console.log('express is running on 3000');
})
