-- Drop the database if it exists
DROP DATABASE IF EXISTS rome;

-- Create the database
CREATE DATABASE rome;

-- Use the created database
USE rome;

-- Create the user table
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(200) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    image VARCHAR(250) NOT NULL,
    PRIMARY KEY (id)
);

-- Create the period table
CREATE TABLE period (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    PRIMARY KEY (id)
);

-- Create the alliance table
CREATE TABLE alliance (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    description VARCHAR(200) NOT NULL,
    image VARCHAR(250) NOT NULL,
    PRIMARY KEY (id)
);

-- Create the building table
CREATE TABLE building (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    description VARCHAR(200) NOT NULL,
    image VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

-- Create the technology table
CREATE TABLE technology (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    description VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    category INT NOT NULL,
    PRIMARY KEY (id)
);

-- Create the role table
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    status VARCHAR(200) NOT NULL,
    description VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

-- Create the User_alliance table
CREATE TABLE user_alliance (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    alliance_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (alliance_id) REFERENCES alliance (id),
    FOREIGN KEY (user_id) REFERENCES user (id)
);

-- Create the battle table
CREATE TABLE battle (
    id INT NOT NULL AUTO_INCREMENT,
    resume VARCHAR(200) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    userAttack_id INT NOT NULL,
    userDefense_id INT NOT NULL,
    userWinner_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (userAttack_id) REFERENCES user (id),
    FOREIGN KEY (userDefense_id) REFERENCES user (id),
    FOREIGN KEY (userWinner_id) REFERENCES user (id)
);

-- Create the province table
CREATE TABLE province (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    description VARCHAR(200) NOT NULL,
    image VARCHAR(250) NOT NULL,
    period_id INT NOT NULL,
    user_id INT NOT NULL,
    battle_id INT NOT NULL,
    alliance_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (period_id) REFERENCES period (id),
    FOREIGN KEY (user_id) REFERENCES user (id),
    FOREIGN KEY (battle_id) REFERENCES battle (id),
    FOREIGN KEY (alliance_id) REFERENCES alliance (id)
);

-- Create the inhabitant table
CREATE TABLE inhabitant (
    id INT NOT NULL AUTO_INCREMENT,
    health INT NOT NULL,
    attack INT NOT NULL,
    defense INT NOT NULL,
    image VARCHAR(255) NOT NULL,
    province_id INT NOT NULL,
    role_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role (id),
    FOREIGN KEY (province_id) REFERENCES province (id)
);

-- Create the ressource_technology table
CREATE TABLE province_technology (
    id INT NOT NULL AUTO_INCREMENT,
    technology_id INT NOT NULL,
    province_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (technology_id) REFERENCES technology (id),
    FOREIGN KEY (province_id) REFERENCES province (id)
);

-- Create the province_building table
CREATE TABLE province_building (
    id INT NOT NULL AUTO_INCREMENT,
    level INT NOT NULL,
    province_id INT NOT NULL,
    building_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (province_id) REFERENCES province (id),
    FOREIGN KEY (building_id) REFERENCES building (id)
);