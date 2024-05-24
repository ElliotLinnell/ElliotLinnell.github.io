CREATE DATABASE form_data;
use form_data;

CREATE TABLE submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    message TEXT
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);