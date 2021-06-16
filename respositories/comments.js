const { Comment } = require('../models');

module.exports = {
getAllComments: function () {
  return Comment.findAll({
    group: 'id'
  });
},

getCommentbyId:function(id){
  return Comment.findOne({
    where:{ 
      id: id
    }
  }) 
},
getCommentsArticle:function(id){
  return Comment.findAll({
    where:{ 
      ArticleId: id
    }
  }) 
},
addComment : async function (comment)  { // async : l'execution --> plus vite
var CommentData= await Comment.create(comment)
return CommentData;
},
updateComment: async function (comment){
var commentdata={
 content: comment.content
}
return await Comment.update(commentdata,{
  where: {
    id: comment.id
  }
});
},
deleteComment: async function (id){
return await Comment.destroy({
  where:{
      id: id
    }
  });
},

}

