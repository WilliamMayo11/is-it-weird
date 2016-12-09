const express = require('express');
const router = express.Router();

const { addQuote, getAllQuotes } = require('../models/quote');
const { addComment } = require('../models/comment');

router.post('/quote', addQuote, (req, res) => {
  res.json(res.rows);
});

router.get('/quotes', getAllQuotes, (req, res) => {
  res.json(res.quotes || []);
});

router.post('/comment/:id', addComment, (req, res) => {
  res.json(res.rows);
})

module.exports = router;
