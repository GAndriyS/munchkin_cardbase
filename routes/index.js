'use strict';

let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
  res.render('client/index.html');
});

module.exports = router;