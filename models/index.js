const Sequelize = require('sequelize');
const database = require('../config/database');

const books = require('./booksModel')(database, Sequelize);

const db = {
    books,
  database,
  Sequelize,
};

module.exports = db;