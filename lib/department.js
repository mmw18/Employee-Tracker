// Declaring Department class that will manage all the department related operations in the db
class Department {
    constructor(connection) {
      this.connection = connection;
    }
    // Function to view all current departments
    async viewAll() {
      try {
        const query = 'SELECT id, name FROM department';
        const [departments] = await this.connection.promise().query(query);
        console.table(departments);
      } catch (error) {
        // Logging any error caught during operation
        console.error('Error viewing departments:', error);
        throw error;
      }
    }
    // Function to add a department
    async add(name) {
      try {
        const query = 'INSERT INTO department (name) VALUES (?)';
        const [result] = await this.connection.promise().query(query, [name]);
        console.log(`Added department: ${name}`);
      } catch (error) {
        // Logging any error caught during operation
        console.error('Error adding department:', error);
        throw error;
      }
    }
  
  }
  
  module.exports = Department;
  