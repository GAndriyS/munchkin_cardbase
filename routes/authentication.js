'use strict';

const express = require('express');
const router = express.Router() ;
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(new GitHubStrategy({
    clientID: '90a8ada27cfa063c640f',
    clientSecret: 'de6621c5daf2a2e95d5822f00ae6db3e05e40b60',
    callbackURL: "http://127.0.0.1:5050/auth/github/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => {
      return done(null, profile);
    });
  }
));

router.get('/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }), (req, res) => {});

router.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  });

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;