// Modules and Dependencies to be used in this application
const inquirer = require('inquirer');
const mysql = require('mysql2');
require('dotenv').config();

// Importing files within this directory
const Department = require('./lib/department');
const Role = require('./lib/role');
const Employee = require('./lib/employee');
// Connecting to MySQL and db
const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

const department = new Department(connection);
const role = new Role(connection);
const employee = new Employee(connection);

// Function that will prompt user for what action they'd like to take
async function init() {
  try {
    const answer = await inquirer.prompt({
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
    });

    switch (answer.action) {
      case 'View all employees':
        await employee.viewAll();
        break;
      case 'Add employee':
        await employee.add();
        break;
      case 'Update employee role':
        await employee.updateRole();
        break;
      case 'View all roles':
        await role.viewAll();
        break;
      case 'Add role':
        await role.add();
        break;
      case 'View all departments':
        await department.viewAll();
        break;
      case 'Add department':
        await department.add();
        break;
      // case 'Exit': exiting application
        console.log('Goodbye!');
        connection.end();
        return;
      default:
        // handles unexpected or invalid inputs by logging an error message and then breaking out of the switch statement
        console.log(`Invalid action: ${answer.action}`);
        break;
    }
    // restarting prompt
    init();
  } catch (error) {
    // Logging an error if one is caught
    console.error('Error:', error);
    init();
  }
}
// Prompting user when application is started
init();




// const inquirer = require('inquirer');
// const mysql = require('mysql2');
// require('dotenv').config();

// // Importing modules being used
// const Department = require('./lib/department');
// const Role = require('./lib/role');
// const Employee = require('./lib/employee');
// const query = require('./lib/query');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// });

// const department = new Department(connection);
// const role = new Role(connection);
// const employee = new Employee(connection);

// function init() {
//   inquirer.prompt({
//     type: 'list',
//     name: 'action',
//     message: 'What would you like to do?',
//     choices: [
//       'View all employees',
//       'Add employee',
//       'Update employee role',
//       'View all roles',
//       'Add role',
//       'View all departments',
//       'Add department',
//       'Exit'
//     ]
//   })
//   .then((answer) => {
//     switch (answer.action) {
//       case 'View all employees':
//         employee.viewAll(); 
//         break;
//       case 'Add employee':
//         employee.add(); 
//         break;
//       case 'Update employee role':
//         employee.updateRole(); 
//         break;
//       case 'View all roles':
//         role.viewAll(); 
//         break;
//       case 'Add role':
//         role.add(); 
//         break;
//       case 'View all departments':
//         department.viewAll();
//         break;
//       case 'Add department':
//         department.add();
//         break;
//       case 'Exit':
//         console.log('Goodbye!');
//         connection.end();
//         break;
//       default:
//         console.log(`Invalid action: ${answer.action}`);
//         init(); // Restarting prompt
//         break;
//     }
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//     init(); // Restarting prompt in case of error
//   });
// }

// // Starting the application
// init();
