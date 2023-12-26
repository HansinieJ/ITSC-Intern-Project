CREATE TABLE users (
  userId INT PRIMARY KEY,
  first_name VARCHAR (100),
  last_name VARCHAR (100),
  username VARCHAR ( 50 ) UNIQUE NOT NULL,
  password VARCHAR ( 50 ) NOT NULL,
  is_supervisor BOOLEAN NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL,
  deleted_at TIMESTAMP NOT NULL
);