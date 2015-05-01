var express = require('express');
var uuid = require('uuid');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/', function(req, res) {
  console.log('Login: ' + JSON.stringify(req.body));
  res.header('Location', 'http://localhost:3000/users/' + uuid.v1());
  res.status(201).end();

});

module.exports = router;
