USE centralPerk_db;

-- Departments
INSERT INTO department (name) VALUES ('Wait-Staff'), ('Kitchen'), ('Entertainment'), ('Human-Resources'), ('Finance'), ('Operations');

-- Roles and their: salary and department ID
INSERT INTO role (title, salary, department_id) VALUES ('Chef', 55000, 2), ('Waiter/Waitress', 20000, 1), ('HR Specialist', 55000, 4), ('Operations Manager', 74000, 6), ('Singer', 20000, 3), ('Actor', 20000, 3), ('Accountant', 73500, 5);

-- Employees (first and Last name), their employee ID, and their manager's employee ID
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('Chandler', 'Bing', 7, 4),
('Phoebe', 'Buffay', 5, 4),
('Monica', 'Geller', 1, 4),
('Ross', 'Geller', 3, 4),
('Rachel', 'Green', 4, NULL),
('Janice', 'Hosenstein', 2, 4),
('Joey', 'Tribbiani', 6, 4);
