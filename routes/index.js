'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('client/index.html');
});

router.get('/dashboard', (req, res, next) => {
  res.render('../client/index.html');
});

module.exports = router;