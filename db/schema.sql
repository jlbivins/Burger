DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burger (
id INT auto_increment,
burger_name VARCHAR(50),
devoured boolean default false,
PRIMARY KEY (id)
);