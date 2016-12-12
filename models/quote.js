const db = require('../lib/dbConnect.js');

function addQuote(req, res, next) {
  db.one(`INSERT INTO quotes (content) VALUES ($1)`, [req.body.content])
  .then(next())
  .catch(err => next(err));
}

function getAllQuotes(req, res, next) {
  console.log('models/quote getAllQuotes function');
  db.any(`SELECT
          q.id,
          q.content,
          q.name,
          q.num_of_flags,
          json_agg(c.*) as comments
          FROM quotes q
          INNER JOIN comments c
          ON quote.id = comment.quote_id
          GROUP BY q.id, q.content, q.name, q.num_of_flags;`)
  .then((quotes) => {
    console.log(quotes);
    res.quotes = quotes;
    next();
  })
  .catch(error => next(error));
}

module.exports = {
  addQuote,
  getAllQuotes
}


// `SELECT
//           q.*,
//           row_to_json(c.*) as comments
//           FROM quotes q
//           LEFT JOIN comments c USING(id);`



