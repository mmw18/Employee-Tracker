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
        init(); // Restarting prompt after operation
        break;
      case 'Add employee':
        const employeeAnswers = await inquirer.prompt([
          {
            type: 'input',
            name: 'first_name',
            message: 'Enter the employee\'s first name:',
          },
          {
            type: 'input',
            name: 'last_name',
            message: 'Enter the employee\'s last name:',
          },
          {
            type: 'input',
            name: 'role_id',
            message: 'Enter the role ID for this employee:',
          },
          {
            type: 'input',
            name: 'manager_id',
            message: 'Enter the manager\'s employee ID (if applicable):',
          },
        ]);
        const { first_name, last_name, role_id, manager_id } = employeeAnswers;
        await employee.add(first_name, last_name, role_id, manager_id);
        init(); // Restarting prompt after operation
        break;
      case 'Update employee role':
        const updateRoleAnswers = await inquirer.prompt([
          {
            type: 'input',
            name: 'employee_id',
            message: 'Enter the ID of the employee you want to update:',
          },
          {
            type: 'input',
            name: 'new_role_id',
            message: 'Enter the ID of the new role for the employee:',
          },
        ]);

        const { employee_id, new_role_id } = updateRoleAnswers;
        await employee.updateRole(employee_id, new_role_id);
        init(); // Restarting prompt after operation
        break;
      case 'View all roles':
        await role.viewAll();
        init(); // Restarting prompt after operation
        break;
      case 'Add role':
        const roleAnswers = await inquirer.prompt([
          {
            type: 'input',
            name: 'title',
            message: 'Enter the role title:',
          },
          {
            type: 'input',
            name: 'salary',
            message: 'Enter the role salary:',
          },
          {
            type: 'input',
            name: 'department_id',
            message: 'Enter the department ID for this role:',
          },
        ]);
        const { title, salary, department_id } = roleAnswers;
        await role.add(title, salary, department_id);
        init(); // Restarting prompt after operation
        break;
      case 'View all departments':
        await department.viewAll();
        init(); // Restarting prompt after operation
        break;
      case 'Add department':
        const departmentNameAnswer = await inquirer.prompt({
          type: 'input',
          name: 'name',
          message: 'Enter the department name:',
        });
        const departmentName = departmentNameAnswer.name;
        await department.add(departmentName);
        init(); // Restarting prompt after operation
        break;
      case 'Exit':
        // case 'Exit': exiting application
        console.log('Goodbye!');
        connection.end();
        return; // Exiting, do not restart prompt
      default:
        // handles unexpected or invalid inputs by logging an error message and then breaking out of the switch statement
        console.log(`Invalid action: ${answer.action}`);
        init(); // Restarting prompt in case of invalid input
        break;
    }
  } catch (error) {
    // Logging an error if one is caught
    console.error('Error:', error);
    init(); // Restarting prompt in case of error
  }
}
// Prompting user when application is started
init();
