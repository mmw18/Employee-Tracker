DELETE DATABASE IF EXISTS centralPerk_db;
CREATE DATABASE IF NOT EXISTS centralPerk_db;
USE centralPerk_db; 

-- Table for DEPARTMENT information
CREATE TABLE department (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL
);

-- Table for ROLE information
CREATE TABLE role (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL UNSIGNED NOT NULL,
  department_id INT UNSIGNED NOT NULL,
  INDEX dep_ind (department_id),
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

-- Table for EMPLOYEE information
CREATE TABLE employee (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT UNSIGNED NOT NULL,
  INDEX role_ind (role_id),
  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
  manager_id INT UNSIGNED,
  INDEX man_ind (manager_id),
  CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);




-- CREATE DATABASE IF NOT EXISTS centralPerk_db;
-- USE centralPerk_db; 

-- -- Table for DEPARTMENT information
-- CREATE TABLE department (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(30) NOT NULL
-- );

-- -- Table for ROLE information
-- CREATE TABLE role (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   title VARCHAR(30) NOT NULL,
--   salary DECIMAL(10, 2) NOT NULL,
--   department_id INT,
--   FOREIGN KEY (department_id) REFERENCES department(id)
-- );

-- -- Table for EMPLOYEE information
-- CREATE TABLE employee (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   first_name VARCHAR(30) NOT NULL,
--   last_name VARCHAR(30) NOT NULL,
--   role_id INT,
--   manager_id INT NULL,
--   FOREIGN KEY (role_id) REFERENCES role(id),
--   FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE CASCADE
-- );
