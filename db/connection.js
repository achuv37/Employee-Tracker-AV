require('dotenv').config();
const mysql = require('mysql2');

// connection to the database
const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME
})

db.connect(err=>{if(err)throw err;});

module.exports = db;