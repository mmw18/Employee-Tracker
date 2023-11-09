const inquirer = require('inquirer');
const mysql = require('mysql2');
require('dotenv').config();

// Importing modules being used
const Department = require('./lib/department');
const Role = require('./lib/role');
const Employee = require('./lib/employee');
const query = require('./lib/query');

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

const department = new Department(connection);
const role = new Role(connection);
const employee = new Employee(connection);

function init() {
  inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      'View all employees',
      'Add employee',
      'Update employee role',
      'View all roles',
      'Add role',
      'View all departments',
      'Add department',
      'Exit'
    ]
  })
  .then((answer) => {
    switch (answer.action) {
      case 'View all employees':
        employee.viewAll(); // TBD
        break;
      case 'Add employee':
        employee.add(); // TBD
        break;
      case 'Update employee role':
        employee.updateRole(); // TBD
        break;
      case 'View all roles':
        role.viewAll(); // TBD
        break;
      case 'Add role':
        role.add(); // TBD
        break;
      case 'View all departments':
        department.viewAll(); // TBD
        break;
      case 'Add department':
        department.add(); // TBD
        break;
      case 'Exit':
        console.log('Goodbye!');
        connection.end(); // TBD
        break;
      default:
        console.log(`Invalid action: ${answer.action}`);
        init(); // Restarting prompt
        break;
    }
  })
  .catch((error) => {
    console.error('Error:', error);
    init(); // Restarting prompt in case of error
  });
}

// Starting the application
init();
