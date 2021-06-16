'use strict';
var faker = require('faker');
var roles = ["Author", "Admin", "Guest"];


module.exports = {
  up: async (queryInterface, Sequelize) => {
    // for(var i=0; i<20;i++){

    //   var randValue=Math.floor(Math.random()*3);

    //   await queryInterface.bulkInsert('users', [{
    //     username: faker.internet.userName(),
    //     email: faker.internet.exampleEmail(),
    //     password: faker.internet.password(),
    //     role: roles[randValue],
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }], {});
    // }
  },

  down: async (queryInterface, Sequelize) => {
 await queryInterface.bulkDelete('users', null, {});
  }
};
