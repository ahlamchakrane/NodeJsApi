'use strict';
var faker = require('faker');
var roles = ["Author", "Admin", "Guest"];
var NbrArticle= [2,3,4,5,6,7,8,9,10]; //Chaque utilisateur aura créé au moins 2 articles et au plus 10 articles
var NbrTags=[2,3,4,5,6]; //Chaque article est taggé avec entre 2 et 6 tags
var NbrComments=[0,1,2,3,4,5,6,7,8,9,10]; //Chaque article est commenté avec entre 0 et 10 commentaires
var TTab= new Array();
var ArticlesTab= new Array();
var Userstab=new Array();
var randValue;
var nbr;
module.exports = {
  up: async (queryInterface, Sequelize) => {
     //10 tags 
	  for(var i=0; i<10;i++){
      randValue=Math.floor(Math.random()*3);
      var tagId = await queryInterface.bulkInsert('Ts', [{ 
          name: faker.internet.userName(),
          createdAt: new Date(),
          updatedAt: new Date()
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
            createdAt: faker.date.between('2020-01-01','2021-01-01'),
            updatedAt: new Date()
       }], {});
        Userstab[i]=userId;
      }
    //creation entre 2 à 10 articles pour chaque utilisateur
      for(var u=0;u<Userstab.length;u++){
      randValue=Math.floor(Math.random()*9);
      nbr=NbrArticle[randValue];
      for(var i=0; i<nbr;i++){
        var ArticleId=await queryInterface.bulkInsert('Articles', [{
          content: faker.lorem.text(),
          title: faker.name.title(),
          createdAt : faker.date.between('2020-01-01', '2021-01-01'),
          updatedAt : new Date(),
          UserId : Userstab[u]
          }], {});
       ArticlesTab[i]=ArticleId;
      }
      }
    //    // acreation entre 0 à 10 commentaire
        for(var a=0;a<ArticlesTab.length;a++){
          randValue=Math.floor(Math.random()*10);
          nbr=NbrComments[randValue];
          for(var i=0; i<nbr;i++){
           await queryInterface.bulkInsert('comments', [{
            content: faker.datatype.string(),
            createdAt : faker.date.between('2020-01-01', '2021-01-01'),
            updatedAt : new Date(),
            ArticleId: ArticlesTab[a]
            }], {});
          }
        }
        for(var a=0;a<ArticlesTab.length;a++){
          randValue=Math.floor(Math.random()*5);
          nbr=NbrTags[randValue];
        for(var i=0; i<nbr;i++){
         await queryInterface.bulkInsert('articletags', [{
          createdAt: faker.date.between('2020-01-01', '2021-01-01'),
          updatedAt: new Date(),
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