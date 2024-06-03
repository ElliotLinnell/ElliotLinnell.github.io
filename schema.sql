CREATE DATABASE form_data;

CREATE user 'form_data_user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON form_data.* TO 'form_data_user'@'localhost';
FLUSH PRIVILEGES;

USING form_data;

CREATE TABLE submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
