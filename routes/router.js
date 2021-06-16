var router = require('express').Router(); //= var router= require('express').Router
var router = require('express').Router();
require('./users')(router);
require('./tags')(router)
require('./comments')(router)
require('./articles')(router)

module.exports = router
	