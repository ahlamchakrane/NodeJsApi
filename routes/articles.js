var Article= require('../respositories/articles'); // return fun

module.exports= function(router){
	router.route('/articles')
		.get(function(req, res){
		 (async () => {
		 	article = await Article.getAllArticles(); // sync
			res.send(article);
			})()
		})
		//insert an article
		.post(function(req, res){
		 Article.addArticle({
         title: req.body.title,
         content: req.body.ArticleConetent,
         UserId: req.body.userID,
         createdAt: new Date(),
         updatedAt: new Date()
      	})
		 res.redirect('articles.html');	
	     })
		//Update an article
		.put(function(req, res){
			Article.updateArticle(req.body)
		    res.status(200).send({
		 	message: 'Article updated '
		 })
		})
	
	router.get('/articles/:id([0-9]+)',function(req, res){ 
		 (async () => {
		 	article = await Article.getArticle(req.params.id); // sync
		 	console.log(article);
			res.send(article || {});
			})()
		})
	router.get('/users/:id([0-9]+)/:articles',function(req, res){ 
		 (async () => {
		 	article = await Article.getUserArticles(req.params.id);
		 	console.log(article);
			res.send(article || {});
			})()
		})
	router.route('/article/:id')
	.delete(function(req, res){
			Article.deleteArticle(req.body.id)
		    res.status(200).send({
		 	message: 'Article deleted '
		 })
		})
	
}
