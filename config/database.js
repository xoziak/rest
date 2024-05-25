const { Sequelize } = require('sequelize');
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });


const database = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
  });

module.exports = database;