var Comment = require('../respositories/comments'); // return fun

module.exports= function(router){
	router.route('/comments')
		.get(function(req, res){
		 (async () => {
		 	comment = await Comment.getAllComments(); // sync
			res.send(comment);
			})()
		})
		.post(function(req, res){
		 Comment.addComment({
         content: req.body.CommentContent,
         createdAt: new Date(),
         updatedAt: new Date(),
         ArticleId: req.body.articleID,
      	 })
		 res.redirect('comments.html');	
	     })

		.put(function(req, res){
		 Comment.updateComment(req.body)
		 res.status(200).send({
		 message: 'Comment updated'
		 })
		 })

	router.get('/comments/:id([0-9]+)',function(req, res){ 
		 (async () => {
		 	comment = await Comment.getCommentbyId(req.params.id); // sync
		 	console.log(comment);
			res.send(comment || {});
			})()
		})
	router.get('/articles/:id([0-9]+)/comments',function(req, res){ 
		 (async () => {
		 	comment = await Comment.getCommentsArticle(req.params.id);
			res.send(comment || {});
			})()
		})
	router.route('/comment/:id')
	.delete(function(req, res){
			Comment.deleteComment(req.body.id)
		    res.status(200).send({
		 	message: 'Comment deleted '
		 })
		})
	
}
