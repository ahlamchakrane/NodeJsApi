'use strict';
var faker = require('faker');
var roles = ["Author", "Admin", "Guest"];
var NbrArticle= [2,3,4,5,6,7,8,9,10]; //Chaque utilisateur aura créé au moins 2 articles et au plus 10 articles
var NbrTags=[2,3,4,5,6]; //Chaque article est taggé avec entre 2 et 6 tags
var NbrComments=[0,1,2,3,4,5,6,7,8,9,10]; //Chaque article est commenté avec entre 0 et 10 commentaires
var TTab= new Array(); //tableau pour stocker les tags
var ArticlesTab= new Array(); //tableau pour stocker les artcles
var Userstab=new Array(); //tableau pour stocker les utilisateurs
var UsersCreatedAt=new Array(); //tableau pour stocker les dates de creation des utilisateurs
var ArticlesCreatedAt=new Array(); //tableau pour stocker les dates de creation des articles
var randValue;
var nbr;
var createdAt;
module.exports = {
  up: async (queryInterface, Sequelize) => {
     //10 tags 
     createdAt=new Date();
	  for(var i=0; i<10;i++){
      randValue=Math.floor(Math.random()*3);
      var tagId = await queryInterface.bulkInsert('Ts', [{ 
          name: faker.lorem.words(3),
          createdAt: createdAt,
          updatedAt: faker.date.future(1, createdAt)
        }], {});
      TTab[i]=tagId;
    }
     // 20 user 
    for(var i=0; i<20;i++){
        randValue=Math.floor(Math.random()*3);
        var userId = await queryInterface.bulkInsert('Users', [{
            username: faker.internet.userName(),
            email: faker.internet.exampleEmail(),
            password: faker.internet.password(),
            role: roles[randValue],
            createdAt: createdAt=faker.date.between('2000-01-01',new Date()),
            updatedAt: faker.date.future(1, createdAt)
       }], {});
        Userstab[i]=userId;
        UsersCreatedAt[i]=createdAt;
      }
    //creation entre 2 à 10 articles pour chaque utilisateur
      for(var u=0;u<Userstab.length;u++){
      randValue=Math.floor(Math.random()*9);
      nbr=NbrArticle[randValue];
      for(var i=0; i<nbr;i++){
        var ArticleId=await queryInterface.bulkInsert('Articles', [{
          content: faker.lorem.text(),
          title: faker.name.title(),
          createdAt: createdAt=faker.date.between(UsersCreatedAt[u],new Date()),
          updatedAt: faker.date.future(1, createdAt),
          UserId : Userstab[u]
          }], {});
       ArticlesTab[i]=ArticleId;
       ArticlesCreatedAt[i]=createdAt;
      }
      }
      console.log(ArticlesTab);
    //    // acreation entre 0 à 10 commentaire
        for(var a=0;a<ArticlesTab.length;a++){
          randValue=Math.floor(Math.random()*10);
          nbr=NbrComments[randValue];
          for(var i=0; i<nbr;i++){
           await queryInterface.bulkInsert('comments', [{
            content: faker.datatype.string(),
            createdAt: createdAt=faker.date.between(ArticlesCreatedAt[a],new Date()),
            updatedAt: faker.date.future(1, createdAt),
            ArticleId: ArticlesTab[a],
            UserId : Userstab[a]
            }], {});
          }
        }
        for(var a=0;a<ArticlesTab.length;a++){
        randValue=Math.floor(Math.random()*5);
        nbr=NbrTags[randValue];
        for(var i=0; i<nbr;i++){
         await queryInterface.bulkInsert('articletags', [{
          createdAt: createdAt=faker.date.between(ArticlesCreatedAt[a],new Date()),
          updatedAt: faker.date.future(1, createdAt),
          ArticleId: ArticlesTab[a],
          TID : TTab[i]
          }], {});
        }
      }
  },

  down: async (queryInterface, Sequelize) => {
      
  }
};
//npm run migrate
//sequelize db:seed:all
//sequelize db:seed:undo:all supprime tous la data de la bse de données 
//https://fakerjsdocs.netlify.app/api/lorem.html#word