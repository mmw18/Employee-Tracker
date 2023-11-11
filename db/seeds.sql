USE centralPerk_db; 

INSERT INTO department (name) VALUES ('Wait-Staff'), ('Kitchen'), ('Entertainment'), ('Human-Resources'), ('Finance'), ('Operations');

INSERT INTO role (title, salary, department_id) VALUES ('Chef', 55000, 2), ('Waiter/Waitress', 20000, 1), ('HR Specialist', 55000, 4), ('Operations Manager', 74000, 6), ('Singer', 20000, 3), ('Actor', 20000, 3), ('Accountant', 73500, 5),;

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('Chandler', 'Bing', 7, 1),
('Phoebe', 'Buffay', 5, 1),
('Monica', 'Geller', 1, 1),
('Ross', 'Geller', 3, 1),
('Rachel', 'Green', 4, NULL),
('Janice', 'Hosenstein', 2, 1),
('Joey', 'Tribbiani', 6, 1);
