'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');

const dbRouter = require('./routes/db.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(logger('dev'));

app.listen(PORT, () => console.log('Server is listening on port', PORT));

app.use('/db', dbRouter);

