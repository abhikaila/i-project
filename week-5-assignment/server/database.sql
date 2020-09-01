-- for creating a database
CREATE DATABASE week-5-assignment;

-- create a user table
CREATE TABLE users(
   id SERIAL PRIMARY KEY,
   name TEXT NOT NULL,
   age INT NOT NULL,
   city TEXT NOT NULL,
   state TEXT,
   mobileNo VARCHAR(10),
   role TEXT,
   email VARCHAR (255) UNIQUE NOT NULL,
   password VARCHAR (50) NOT NULL
);

