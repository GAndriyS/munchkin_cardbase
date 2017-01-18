'use strict';

const express = require('express');
const router = express.Router();
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

passport.use(new GitHubStrategy({
    clientID: '90a8ada27cfa063c640f',
    clientSecret: 'de6621c5daf2a2e95d5822f00ae6db3e05e40b60',
    callbackURL: 'http://localhost:5050/login/github/callback'
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Login
router.get('', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype');
  res.setHeader('Access-Control-Allow-Credentials', true);
  passport.authenticate('github');
});

router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
  console.log(req, res);
  res.redirect('/');
});

module.exports = router;