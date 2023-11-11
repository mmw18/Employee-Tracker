// Declaring Role class that will manage all the role related operations in the db
class Role {
    // Initializing the class with connection to db
    constructor(connection) {
      this.connection = connection;
    }
    //viewing all roles
    async viewAll() {
      try {
        const query = `
          SELECT role.id, role.title, department.name AS department, role.salary
          FROM role
          INNER JOIN department ON role.department_id = department.id`;
        const [roles] = await this.connection.promise().query(query);
        console.table(roles);
      } catch (error) {
        // Logging any errors that occur during operation
        console.error('Error viewing roles:', error);
        throw error;
      }
    }
    // Adding a new Role
    async add(title, salary, department_id) {
      try {
        const query = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
        const [result] = await this.connection.promise().query(query, [title, salary, department_id]);
        console.log(`Added role: ${title}`);
      } catch (error) {
        console.error('Error adding role:', error);
        throw error;
      }
    }
  }
  // Exporting the Role class to be used in other parts of this application
  module.exports = Role;
  