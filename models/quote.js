const db = require('../lib/dbConnect.js');

function addQuote(req, res, next) {
  console.log('models/addQuote');
  db.one(`INSERT INTO quotes (content) VALUES ($1)`, [req.body.content])
  .then(next())
  .catch(err => next(err));
}


module.exports = {
  addQuote
}
