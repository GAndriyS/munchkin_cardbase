'use strict';

let express = require('express');
let mongojs = require('mongojs');
let router = express.Router();
let db = mongojs('mongodb://admin:admin@ds153667.mlab.com:53667/munchkin_cardbase', ['cards']);

// Get All Cards
router.get('/cards', (req, res, next) => {
  db.cards.find((err, cards) => {
    if (err) {
      res.send(err);
    }
    res.json(cards);
  });
});

module.exports = router;