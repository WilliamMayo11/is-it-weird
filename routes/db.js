const express = require('express');
const router = express.Router();

const { addQuote } = require('../models/quote');

router.post('/quote', addQuote, (req, res) => {
  res.json(res.rows);
});

module.exports = router;
