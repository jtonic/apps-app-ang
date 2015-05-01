var express = require('express');
var uuid = require('uuid');
var mongoose = require('mongoose');
//var async = require('async');
var router = express.Router();

mongoose.connect('mongodb://localhost/ap');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log("Successfully connected");
});

var LoginSchema = mongoose.Schema({
    email: String,
    password: String
}, {collection: "login"});
var LoginModel = mongoose.model('Login', LoginSchema);

/* GET users listing. */
router.get('/', function (req, res) {

    LoginModel.find({}, function (err, obj) {
        if (err)
            console.log('error occurred in the database');
        console.log("Found : " + JSON.stringify(obj));
    });

    res.status(200).end();

});

router.post('/', function (req, res) {
    const loginReq = req.body;
    console.log('Login: ' + JSON.stringify(loginReq));

    var login = new LoginModel();
    login.email = loginReq.email;
    login.password = loginReq.password;

    console.log("Login model: " + login);

    login.save(function (err, user) {
        if (err) {
            console.log('error occurred in the database');
        } else {
            console.log('Login saved in db: ' + JSON.stringify(user));
        }
        res.header('Location', 'http://localhost:3000/users/' + uuid.v1());
        res.status(201).end();
    });

});

module.exports = router;
