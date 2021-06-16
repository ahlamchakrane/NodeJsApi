'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    static associate(models) {
    Article.belongsTo(models.User)
    Article.hasMany(models.Comment)
    Article.belongsToMany(models.T, {through: 'ArticleTags'})
    }
  };
  Article.init({
    title: {
    unique: true,
    type: DataTypes.STRING,
    },
    content: DataTypes.TEXT,
    published: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};