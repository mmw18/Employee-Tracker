// Function to retrieve information about each employee
async function getEmployeeDetails(connection) {
  /* SQL query that will join the employee, role, and department tables, fetching employee id, 
  name, role title, department name, salary, and manager name */
    const query = `
      SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
      FROM employee e
      JOIN role r ON e.role_id = r.id
      JOIN department d ON r.department_id = d.id
      LEFT JOIN employee m ON e.manager_id = m.id
    `;
    // Executing the query and returning it as rows
    const [rows] = await connection.promise().query(query);
    return rows;
  }
  // Exporting the module for use in other parts of this application
  module.exports = {
    getEmployeeDetails
  };
  