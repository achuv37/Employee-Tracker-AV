const mysql = require('mysql2');
const inquirer = require ('inquirer');
require('dotenv').config();

// Connect to our database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // mysql password
    user: 'process.env.DB_USER',
    password: 'process.env.DB_PW',
    database: 'process.env.DB_NAME'
  },
  console.log('connected to the database.')
)