const pgp = require('pg-promise')();
console.log('dbConnect.js was hit');

const config = process.env.DATABASE_URL || {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};

const db = pgp(config);

module.exports = db;
