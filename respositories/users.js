const { User } = require('../models');

module.exports = {
getAllUsers: function () {
  return User.findAll();
},
getUsers: function(offset = 0, limit =10){ //offset indice de le premier user et limit le dernoer
  return User.findAll({ offset: offset, limit: limit});
},
getAdmins: function(){
  return User.findAll({
  where:{
        role: 'Admin'
      }
    });
},
getAuthors:function(){
  return User.findAll({
  where:{
        role: 'Author'
      }
    });
},
getGuests:function(){ //sync : le meme ordre
  return User.findAll({
  where:{
        role: 'Guest'
      }
    });
},
getUser:function(id){
  return User.findOne({
    where:{ 
      id: id
    }
  }) 
},
getUserByEmail:function(email){
return User.findOne({
where:{
      email: email
    }
  });
},
addUser : async function (user)  { // async : l'execution --> plus vite
var userData= await User.create(user)
return userData;
},
updateUser: async function (user){
var userdata={
  password: user.password,
  role: user.role,
  username: user.username,
  email: user.email
}
return await User.update(userdata,{
  where: {
    id: user.id
  }
});
},
deleteUser: async function (id){
return await User.destroy({
  where:{
      id: id
    }
  });
},

}
// console.log(`There are ${await Project.count()} projects`);

// const amount = await Project.count({
//   where: {
//     id: {
//       [Op.gt]: 25
//     }
//   }
// });
// console.log(`There are ${amount} projects with an id greater than 25`);
//https://sequelize.org/master/manual/model-querying-basics.html#simple-delete-queries