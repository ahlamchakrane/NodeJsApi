
var jwt = require('jsonwebtoken');
var User=require('../respositories/users')
module.exports= function (req, res, next) {
	//vaerify token
	if(!req.headers.token){
		return res.status(403).send({
			message: 'Access denied'
		});
	}
	jwt.verify(req.headers.token, 'MySecretKey', async function(err, decoded){
		if(!err){
			//recuperer l'utilisateur de la  base de donnees
		var user= await User.getUser(decoded.id);
			if(user){
			req.user =user;
			return next();
			  }
		}
		return res.status(403).send({
			message: 'Access denied'
		});
	})
}