const mysql = require('mysql2');
require('dotenv').config();

// Creating a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER, 
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_NAME 
  // ^ As defined in .env
});

module.exports = connection;
