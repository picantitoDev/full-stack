const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database.js');

const db = new Sequelize(dbConfig.name, dbConfig.username, dbConfig.password, {
    host: dbConfig.hostname,
    dialect: 'mysql',
    port: dbConfig.port
});

module.exports = db;