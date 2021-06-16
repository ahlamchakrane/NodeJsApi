

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('');
});

router.get('/articles', function(req, res, next) {
  res.send('');
});

router.get('/tags', function(req, res, next) {
  res.send('');
});

router.get('/comments', function(req, res, next) {
  res.send('');
});

module.exports = router;
