CREATE TABLE info(
    id SERIAL PRIMERY KEY,
    title VARCHAR (255) UNIQUE NOT NULL,
    description TEXT
);