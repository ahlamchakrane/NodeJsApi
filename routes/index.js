var express = require('express');
var router = express.Router();
var authMiddleware=require('../middlewares/auth');


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

router.get('/update',authMiddleware,function(req, res){
	res.send('ok');
})

module.exports = router;
