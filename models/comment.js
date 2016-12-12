const db = require('../lib/dbConnect.js');

function addComment(req, res, next) {

  db.one(`INSERT INTO comments (comment_content, quote_id) VALUES ($1, $2)`, [req.body.content, req.body.quote_id])
  .then(next())
  .catch(err => next(err));
}

function getAllComments(req, res, next) {
  console.log('models/quote getAllComments function');
  db.any(`SELECT * FROM comments;`)
  .then((comments) => {
    console.log(comments);
    res.comments = comments;
    next();
  })
  .catch(error => next(error));
}

module.exports = {
  addComment, getAllComments
}
