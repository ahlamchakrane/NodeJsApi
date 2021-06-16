var jwt = require('jsonwebtoken');
var user=require('../respositories/users')
module.exports= function (req, res, next) {
	//vaerify token
	if(!req.body.token){
		return res.status(403).send({
			message: 'Access denied'
		});
	}
	jwt.verify(req.body.token, 'mySecretKey', async function(err, decoded){
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