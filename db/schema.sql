BEGIN;

DROP TABLE IF EXISTS quotes;
DROP TABLE IF EXISTS comments;

-- CREATE TABLE quotes (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR,
--   content VARCHAR,
--   num_of_flags INTEGER
-- );

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  content VARCHAR,
  num_of_likes INTEGER,
  quote_id
)

COMMIT;
