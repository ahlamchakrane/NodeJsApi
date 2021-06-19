var router = require('express').Router(); //= var router= require('express').Router
var authMiddleware=require('../middlewares/auth');
// var roles=require('../middlewares/role');

//ajouter les routes public private
require('./users')(router);
require('./tags')(router);
require('./comments')(router);
require('./articles')(router);
require('./Login')(router);

// router.get('/update',authMiddleware,roles(['Admin','Author']),function(req, res){
// 	res.send('done');
// 	console.log(req.user);
// })

module.exports = router
// 	window.getCookie = function(name) {
//   var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
//   if (match) return match[2];
// }