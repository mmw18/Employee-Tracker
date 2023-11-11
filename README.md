# Employee Tracker CMS

## Description

This application is an Employee tracker, a command-line content management system (CMS), that allows Central Perk Coffee to easily view, add, and interact with information stored in their company's employee database. This application is built using Node.js and leverages MySQL for data management, ensuring smooth and efficient handling of employee data.

In developing the Employee Tracker CMS, I gained practical experience in building a command-line application using Node.js, which deepened my understanding of asynchronous programming and database management with MySQL. This project inforced my skills in crafting complex SQL queries and integrating them seamlessly with Node.js, and has enhanced my proficiency in backend development and data handling. Additionally, it offered valuable insights into the importance of relational database design and the effective use of foreign key constraints to maintain data integrity and relationships within a business context.

## Features

- View all departments, roles, and employees in a structured format.
- Add new departments, roles, and employees to the database.
- Update employee roles for effective management.

## Installation

To set up Employee Tracker, follow these steps:

1. Clone this repository to your computer

2. Install the needed dependencies using npm: 
```
npm install inquirer@8.2.4 mysql2 dotenv
```

3. Open your new package.json to remove the upper carot (if one is present) just before the version # for Inquirer. Your package.json should match the following: 
```
{
  "dependencies": {
    "dotenv": "^16.3.1",
    "inquirer": "8.2.4",
    "mysql2": "^3.6.3"
  }
}

```

3. Set up your MySQL database and execute the `schema.sql` and `seeds.sql` files to create and populate the necessary tables.
```
source db/schema.sql
```

```
source db/seeds.sql
```
4. Create a `.env` file in the root directory to store your MySQL credentials.

```
DB_HOST=#Host
DB_USER=#Username
DB_PASSWORD=#password
DB_NAME=centralPerk_db
```

## Usage

As a user of this application, I am the owner of Central Perk Coffee, and am wanting to view my staff details easily. I would like to be able to see the names of each employee, as well as their role, salary, department, and manager. I want each employee to have their own unique ID as well. If I decide to I would like to create a new department or role, or perhaps hire someone new for the coffee house, I want to be able to easily enter this into my database system. Department or hire changes mean I may have to move around some of my employees, so being able to change the role of each employee is a neccessity. 

## Technology

- Node.js
- MySQL
- Inquirer.js for interactive CLI
- Console.table for table formatted output

## Schema Structure

- `department`: Contains department details.
- `role`: Contains job roles with associated salary and department.
- `employee`: Contains employee personal details, role, and manager.

## Functionality

- `Role.js`, `Department.js`, `Employee.js` handle specific operations related to their respective data models.
- `connection.js` manages the database connection.
- `getEmployeeDetails` function in a separate module for complex queries.


## Working Application Run-Through
