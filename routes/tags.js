var Tag= require('../respositories/tags'); // return fun
var bodyParser= require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false});

module.exports= function(router){
	router.route('/tags')
		.get(function(req, res){
		 (async () => {
		 	tag = await Tag.getAllTags(); // sync
			res.send(tag);
			})()
		})
		// insert a tag
		.post(function(req, res){
		 Tag.addTag({
         name: req.body.TagName,
         createdAt: new Date(),
         updatedAt: new Date()
      	})
		 res.redirect('tags.html');	
	     })
		//update a tag
	   .put(function(req, res){
		 Tag.updateTag(req.body)
		 res.status(200).send({
		 	message: 'Tag updated '
		 })
		
		})
	router.get('/tags/:id([0-9]+)',function(req, res){ 
		 (async () => {
		 	tag = await Tag.getTag(req.params.id); // sync
		 	console.log(tag);
			res.send(tag || {});
			})()
		})
	router.route('/tag/:id')
	.delete(function(req, res){
			Tag.deleteTag(req.body.id)
		    res.status(200).send({
		 	message: 'Tag deleted '
		 })
		})
	
}
