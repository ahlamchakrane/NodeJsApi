const { T } = require('../models');

module.exports = {
getAllTags: function () {
  return T.findAll();
},

getTag:function(id){
  return T.findOne({
    where:{ 
      id: id
    }
  }) 
},
addTag : async function (tag)  { // async : l'execution --> plus vite
var tagData= await T.create(tag)
return tagData;
},
updateTag: async function (tag){
var tagdata={
  name: tag.name
}
return await T.update(tagdata,{
  where: {
    id: tag.id
  }
});
},
deleteTag: async function (id){
return await T.destroy({
  where:{
      id: id
    }
  });
},

}

