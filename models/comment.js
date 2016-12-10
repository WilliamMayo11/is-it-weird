const db = require('../lib/dbConnect.js');

function addComment(req, res, next) {

  db.one(`INSERT INTO comments (content) VALUES ($1)`, [req.body.content])
  .then(next())
  .catch(err => next(err));
}

// function getAllQuotes(req, res, next) {
//   console.log('models/quote getAllQuotes function');
//   db.any(`SELECT * FROM quotes;`)
//   .then((quotes) => {
//     res.quotes = quotes;
//     next();
//   })
//   .catch(error => next(error));
// }

module.exports = {
  addComment
}
