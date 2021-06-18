var User= require('../respositories/users'); // return fun
var jwt=require('jsonwebtoken');
var roles=require('../middlewares/role');

module.exports= function(router){
	router.post('/tt',function(req,res){
		res.send('ok');
	})
	router.post('/auth',async function(req, res) {
		  var token, user;
		  // find user
		 user =await User.getUserByEmail(req.body.email);
	  // user found and password verified
	  	 if (user && user.password==req.body.password){
	    // create token
		    token = jwt.sign({
		      id: user.id
		    },'MySecretKey');
	    // send response
		res.json({
	      auth: true,
	      message: "User authenticated",
	      token: token,
	      user: {
	        id: user.id,
	        firstName: user.firstName,
	        lastName: user.lastName
	      }
	    });
	  } else {
	    // when no user found or incorrect password
	    res.status(401).json({
	      auth: false,
	      message: "Email or password is incorrect"
	    });
	  }
	});
	router.route('/users')
		.get(function(req, res){
		 (async () => {
		 	user = await User.getAllUsers(); // sync
			res.send(user);
			})()
		})
		//Insert a user
		.post(roles(['Admin','Author']),function(req, res){
		 User.addUser({
         username: req.body.username,
         email: req.body.email,
         password: req.body.password,
         createdAt: new Date(),
         updatedAt: new Date(),  
         role: req.body.role,
      	 })
		 res.redirect('index.html');	
	     })
		//Update a user
		.put(roles(['Admin','Author']),function(req, res){
		User.updateUser(req.body)
		 res.status(200).send({
		 message: 'User updated '
		 })
		})

	     router.get('/guest',function(req, res){
		 (async () => {
		 	user = await User.getGuests(); // sync
			res.send(user);
			})()
		})
	router.get('/admin',function(req, res){
		 (async () => {
		 	user = await User.getAdmins(); // sync
			res.send(user);
			})()
		})
	router.get('/author',function(req, res){
		 (async () => {
		 	user = await User.getAuthors(); // sync
			res.send(user);
			})()
		})
	router.get('/users/:id([0-9]+)',function(req, res){ 
		 (async () => {
		 	user = await User.getUser(req.params.id); // sync
		 	console.log(user);
			res.send(user || {});
			})()
		})
	router.route('/user/:id')
	.delete(roles(['Admin','Author']),function(req, res){
			User.deleteUser(req.body.id)
		    res.status(200).send({
		 	message: 'User deleted '
		 })
		})
}
