'use strict';
const {
  Model
} = require('sequelize');
const sequelize = require('../../config/database');
const { Sequelize } = require('.');

module.exports = sequelize.define('User', 
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    userType: {
      type: Sequelize.ENUM["0", "1", "2"],
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    deletedAt: {
      type: Sequelize.DATE,
    }
  },
  {
    paranoid: true, // to not completely delete data
    freezeTableName: true,
    modelName: 'User',
  }
)