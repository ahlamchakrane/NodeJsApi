'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class T extends Model {
    static associate(models) {
      T.belongsToMany(models.Article, {through: 'ArticleTags'})
    }
  };
  T.init({
    name: {
    unique: true,
    type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'T',
  });
  return T;
};