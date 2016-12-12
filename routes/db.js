const express = require('express');
const router = express.Router();

const { addQuote, getAllQuotes } = require('../models/quote');
const { addComment, getAllComments } = require('../models/comment');

router.post('/quote', addQuote, (req, res) => {
  res.json(res.rows);
});

router.get('/quotes', getAllQuotes, (req, res) => {
  res.json(res.quotes || []);
});

router.post('/comment', addComment, (req, res) => {
  res.json(res.rows);
});

router.get('/comment', getAllComments, (req, res) => {
  res.json(res.comments || []);
});

module.exports = router;
