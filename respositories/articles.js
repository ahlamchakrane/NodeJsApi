const { Article } = require('../models');

module.exports = {
getAllArticles: function () {
  return Article.findAll();
},

getArticle:function(id){
  return Article.findOne({
    where:{ 
      id: id
    }
  }) 
},
getUserArticles:function(id){
  return Article.findAll({
    where:{ 
      UserId: id
    }
  }) 
},
addArticle : async function (article)  { // async : l'execution --> plus vite
var ArticleData= await Article.create(article)
return ArticleData;
},
updateArticle: async function (article){
var articledata={
  title: article.title,
  content: article.content,
  UserId: article.UserId
}
return await Article.update(articledata,{
  where: {
    id: article.id
  }
});
},
deleteArticle: async function (id){
return await Article.destroy({
  where:{
      id: id
    }
  });
},

}

