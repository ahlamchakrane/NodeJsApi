'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Article);
      User.hasMany(models.Comment);
    }
  };
  User.init({
    username: {
    allowNull: false,
    type :DataTypes.STRING
    },
    email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING
    }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};