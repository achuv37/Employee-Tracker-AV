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

// Employee Tracker function.
// Inquirer prompt to ask questions to the user.
const employeeTracker = () => {
  inquirer
      .prompt({
        name: 'menu',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role'
        ],
      })
      .then((answer) => {
        switch (answer.menu) {
          case 'View all departments':
            viewDepartments();
            break;
           
          case 'View all roles':
            viewRoles();
            break;
            
          case 'View all employees':
            viewEmployee();
            break;
              
          case 'Add a department':
            addDepartment();
            break;
        
          case 'Add a role':
            addRole();
            break;
        
          case 'Add an employee':
            addEmployee();
            break;

          case 'Update an employee role':
            updateEmployeeRole();
            break;
        }
      });
};

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


// Displays the employee data
const viewEmployee = () => {
  const sql = `SELECT * FROM employee`;
  db.query(sql, (err,rows) => {
    if(err) {
      console.log(err);
      return;
    }
    console.table(rows);
    return;
  })
}


// Function to add a department, add a role, add a role. Used inquirer prompt to ask questions to the user.
//const addDepartment = ()
// const addRole = ()
// const addEmployee = ()
// const updateEmployeeRole =()