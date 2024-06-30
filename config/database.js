const { Sequelize } = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('.');

// const sequelize = new Sequelize(config[env]);

const sequelize = new Sequelize(process.env.PROD_DB_HOST)

module.exports = sequelize;