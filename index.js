const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./db/connection');

// Employee Tracker function.
// Inquirer prompt to ask questions to the user.
const employeeTracker = () => {
  inquirer
    .prompt([{
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
      ]
    }])
    .then((answers) => {
      switch (answers.menu) {
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
function viewDepartments() {
  const sql = `SELECT * FROM departments`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    };
    console.table(rows);
    employeeTracker();

  })
}


// // Displays the roles data
function viewRoles() {
  const sql = `SELECT * FROM roles`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.table(rows);
    employeeTracker();

  })
}

// // Displays the employee data
function viewEmployee() {
  const sql = `SELECT * FROM employee`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.table(rows);
    employeeTracker();
  })
}

// Function to add a department, add a role, add a role. Used inquirer prompt to ask questions to the user.

// function to add role
function addRole() {
  db.query("SELECT * FROM roles;", function(err,data) {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'role',
        message: 'What is the job title?'
      },
      {
        type: 'number',
        name: 'salary',
        message: 'What is the salary for this job title?'
      },
      {
        type: 'number',
        name: 'departmentId',
        message: 'Which is the department Id for the new role?',
        
      },
      
    ]).then(function (answer) {
      db.query(
        `INSERT INTO roles (job_title, salary, department_id)
        VALUES ("${answer.role}", "${answer.salary}", "${answer.departmentId}" );`,
        function (err, data) {
          if (err) {
            console.log(err);
            return;
          } else {
            console.log("New role added");
            viewRoles();
          }
        }
      );
    });
  } 
)}

// Function to add a department.
function addDepartment() {
  inquirer
    .prompt([{
      name: 'department',
      type: 'input',
      message: 'What department would you like to add?',
    }])
    .then(body = (response) => {
      const sql = `INSERT INTO departments (department_name) VALUES ('${response.department}');`;
      const param = [body.department];
      db.query(sql, param, (err, res) => {
        if (err) {
          res.status(400).json({
            error: err.message
          });
          return;
        }
        viewDepartments();
      });
    });
};

employeeTracker();