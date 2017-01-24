'use strict';

const express = require('express');
const mongojs = require('mongojs');
const router = express.Router();
const db = mongojs('mongodb://admin:admin@ds153667.mlab.com:53667/munchkin_cardbase', ['door_cards', 'treasure_cards']);

// Get All Door Cards
router.get('/door/cards', (req, res, next) => {
  db.door_cards.find((err, cards) => {
    if (err) {
      res.send(err);
    }
    res.json(cards);
  });
});

// Get All Treasure Cards
router.get('/treasure/cards', (req, res, next) => {
  db.treasure_cards.find((err, cards) => {
    if (err) {
      res.send(err);
    }
    res.json(cards);
  });
});

module.exports = router;