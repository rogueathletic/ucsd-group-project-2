CREATE DATABASE login_db;
USE login_db;
CREATE TABLE login_info(
user_id INT NOT NULL AUTO_INCREMENT,
user_email VARCHAR(30) NOT NULL,
user_name VARCHAR(30) NOT NULL,
user_password VARCHAR(30) NOT NULL,
primary key(user_id)
);

