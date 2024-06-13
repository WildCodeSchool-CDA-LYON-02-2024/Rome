DROP DATABASE IF EXISTS rome;

CREATE DATABASE rome;

USE rome;

-- Create the user table
CREATE TABLE
    user (
        id INT NOT NULL AUTO_INCREMENT,
        username VARCHAR(200) NOT NULL,
        image VARCHAR(250) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        PRIMARY KEY (id),
    );

-- Create the provinces table
CREATE TABLE
    province (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(200) NOT NULL,
        description VARCHAR(200) NOT NULL,
        image VARCHAR(250) NOT NULL,
        period_id INT NOT NULL,
        user_id INT NOT NULL,
        battle_id INT NOT NULL,
        alliance_id INT NOT NULL,
        PRIMARY KEY (id),
    );

-- Create the period table
CREATE TABLE
    period (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(200) NOT NULL,
        PRIMARY KEY (id),
    );

-- Create the alliance table
CREATE TABLE
    alliance (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(200) NOT NULL,
        description VARCHAR(200) NOT NULL,
        image VARCHAR(250) NOT NULL,
        PRIMARY KEY (id),
    );

-- Create the User_alliance table
CREATE TABLE
    user_alliance (
        id INT NOT NULL AUTO_INCREMENT,
        user_id INT NOT NULL,
        alliance_id INT NOT NULL,
        PRIMARY KEY (id)
    );

-- Create the building table
CREATE TABLE
    building (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(200) NOT NULL,
        description VARCHAR(200) NOT NULL,
        image VARCHAR(255) NOT NULL,
        PRIMARY KEY (id),
    );

-- Create the province_building table
CREATE TABLE
    province_building (
        id INT NOT NULL AUTO_INCREMENT,
        level INT NOT NULL,
        province_id INT NOT NULL,
        building_id INT NOT NULL,
        PRIMARY KEY (id),
    );

-- Create the technology table
CREATE TABLE
    technology (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(200) NOT NULL,
        description VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
    );

-- Create the ressource_technology table
CREATE TABLE
    ressource_technology (
        id INT NOT NULL AUTO_INCREMENT,
        technology_id INT NOT NULL,
        ressources_id INT NOT NULL,
        PRIMARY KEY (id)
    );

-- Create the inhabitant table
CREATE TABLE
    inhabitant (
        id INT NOT NULL AUTO_INCREMENT,
        health INT NOT NULL,
        attack INT NOT NULL,
        defense INT NOT NULL,
        image VARCHAR(255) NOT NULL,
        province_id INT NOT NULL,
        role_id INT NOT NULL,
        PRIMARY KEY (id)
    );

-- Create the role table
CREATE TABLE
    role (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(200) NOT NULL,
        status VARCHAR(200) NOT NULL,
        description VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
    );

-- Create the battle table
CREATE TABLE
    battle (
        id INT NOT NULL AUTO_INCREMENT,
        resume VARCHAR(200) NOT NULL,
        start_date date NOT NULL,
        end_date date NOT NULL,
        userAttack_id INT NOT NULL,
        userDefense_id INT NOT NULL,
        userWinner_id INT NOT NULL,
        PRIMARY KEY (id)
    );

