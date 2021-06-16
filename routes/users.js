var User= require('../respositories/users'); // return fun
var bodyParser= require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false});
module.exports= function(router){
	router.route('/users')
		.get(function(req, res){
		 (async () => {
		 	user = await User.getAllUsers(); // sync
			res.send(user);
			})()
		})
		//Insert a user
		.post(urlencodedParser, function(req, res){
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
		.put(function(req, res){
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
	.delete(function(req, res){
			User.deleteUser(req.body.id)
		    res.status(200).send({
		 	message: 'User deleted '
		 })
		})
}
