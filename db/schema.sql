BEGIN;

DROP TABLE IF EXISTS quotes;

CREATE TABLE quotes (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  content VARCHAR,
  num_of_flags INTEGER
);

COMMIT;
