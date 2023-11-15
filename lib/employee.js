// Declaring Employee class that will manage all the employee related operations in the db
class Employee {
    constructor(connection) {
      this.connection = connection;
    }
    // Funciton to view all employees
    async viewAll() {
      try {
        const query = `
          SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
          FROM employee e
          LEFT JOIN role ON e.role_id = role.id
          LEFT JOIN department ON role.department_id = department.id
          LEFT JOIN employee m ON e.manager_id = m.id`;
        const [employees] = await this.connection.promise().query(query);
        console.table(employees);
      } catch (error) {
        // Logging any error caught during operation
        console.error('Error viewing employees:', error);
        throw error;
      }
    }

    // Populating all employees as the read names, instead of value ID's
    async getAllEmployees() {
      try {
        const query = 'SELECT id, CONCAT(first_name, " ", last_name) AS name FROM employee';
        const [employees] = await this.connection.promise().query(query);
        return employees.map(emp => ({ name: emp.name, value: emp.id }));
      } catch (error) {
        console.error('Error fetching employees:', error);
        throw error;
      }
    }

    // Populating all managers as the read names, instead of value ID's
    async getAllManagers() {
      const query = 'SELECT id, CONCAT(first_name, " ", last_name) AS name FROM employee WHERE manager_id IS NULL';
      const [managers] = await this.connection.promise().query(query);
      return managers.map(manager => ({ name: manager.name, value: manager.id }));
    }    

    // Function to add a new employee
    async add(firstName, lastName, roleId, managerId) {
      try {
        const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
        const [result] = await this.connection.promise().query(query, [firstName, lastName, roleId, managerId]);
        console.log(`Added employee: ${firstName} ${lastName}`);
      } catch (error) {
        // Logging any error caught during operation
        console.error('Error adding employee:', error);
        throw error;
      }
    }
    // Function to update the role of an existing employee
    async updateRole(employeeId, roleId) {
      try {
        const query = 'UPDATE employee SET role_id = ? WHERE id = ?';
        const [result] = await this.connection.promise().query(query, [roleId, employeeId]);
        console.log(`Updated employee's role`);
      } catch (error) {
        // Logging any error caught during operation
        console.error('Error updating employee role:', error);
        throw error;
      }
    }
  }
  // Exporting the Employee class to be used in other parts of this application 
  module.exports = Employee;
  