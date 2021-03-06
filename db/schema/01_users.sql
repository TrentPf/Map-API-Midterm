-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS collaborators CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE collaborators (
  id SERIAL PRIMARY KEY NOT NULL,
  collaborator_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  map_id INTEGER REFERENCES maps(id) ON DELETE CASCADE
);
