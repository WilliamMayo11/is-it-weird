const express = require('express');
const router = express.Router();

const { addQuote, getAllQuotes } = require('../models/quote');

router.post('/quote', addQuote, (req, res) => {
  res.json(res.rows);
});

router.get('/quotes', getAllQuotes, (req, res) => {
  res.json(res.quotes || []);
});

module.exports = router;
