const mysql = require('mysql2');
const inquirer = require ('inquirer');
const cTable = require('console.table');
require('dotenv').config();

// Connect to our database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // mysql password
    user: 'root',
    password: 'Aswathyajesh01$',
    database: 'employees'
  },
  console.log('connected to the database.')
)

// Function for displaying department data
const viewDepartments = () => {
  const sql = `SELECT * FROM departments`;
  db.query(sql, (err,rows) => {
    if(err) {
      console.log(err);
      return;
    }
    console.table(rows);
    return;
  })
}
// viewDepartments();

// Displays the roles data
const viewRoles = () => {
  const sql = `SELECT * FROM roles`;
  db.query(sql, (err,rows) => {
    if(err) {
      console.log(err);
      return;
    }
    console.table(rows);
    return;
  })
}
viewRoles();