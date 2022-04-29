INSERT INTO departments (department_name)
VALUES
    ('Sales Person'),
    ('Lead Engineer'),
    ('Software Engineer'),
    ('Accountant Manager'),
    ('Accountant'),
    ('Legal Team Lead'),
    ('Lawyer');

INSERT INTO roles (job_title, salary, department_id)
VALUES 
    ('Sales Executive', 35000, 7 ),
    ('Technical Lead', 45000, 3),
    ('Team Lead', 50000, 3),
    ('Engineer Lead', 85000, 3),
    ('Marketing analyst', 70000, 7),
    ('Marketing consultant', 50000, 7),
    ('Chief marketing officer', 150000, 7),
    ('Software Architech', 80000, 1),
    ('Engineering project manager', 100000, 1),
    ('Engineering Lead', 75000, 1),
    ('Accounting Clerk', 50000, 2),
    ('Auditor', 68000, 2),
    ('Chief Financial Officer', 160000, 2),
    ('Legal assistants', 55000, 4),
    ('Contact Analyst', 35000, 4),
    ('Legal Consultants', 35000, 4),
    ('Communicator', 30000, 5),
    ('Strategist', 45000, 5),
    ('Supervisor', 45000, 5),
    ('Goal setter', 50000, 5);

INSERT INTO employee (first_name, last_name, salary, role_id, manager_id)
VALUES
    ('John', 'Peter', 45000, 1, 7),
    ('Ann', 'Alex', 25000, 2, 7),
    ('Ryan', 'Rex', 75000, 1, 7),
    ('Anna', 'Peter', 65000, 1, 5),
    ('Peter', 'John', 35000, 1, 5),
    ('Mary', 'Paul', 40000, 2, 5),
    ('Tom', 'Pol', 50000, 2, 3),
    ('Jina', 'Tom', 90000, 3, 3),
    ('Tina', 'Ann', 32000, 1, 3),
    ('Jame', 'Jacob', 55000, 1, 3),
    ('Jacob', 'John', 145000, 4, 1),
    ('Jon', 'Mary', 45000, 3, 1),
    ('Montague', 'Summers',100000, 5, 4),
    ('Octavia', 'Butler',150000,5, 1),
    ('Unica', 'Zurn', 98000, 5,2);
