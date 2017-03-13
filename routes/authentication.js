'use strict';

const express = require('express');
const router = express.Router() ;
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

const mongojs = require('mongojs');
const db = mongojs('mongodb://admin:admin@ds153667.mlab.com:53667/munchkin_cardbase', ['users']);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(new GitHubStrategy({
    clientID: '90a8ada27cfa063c640f',
    clientSecret: 'de6621c5daf2a2e95d5822f00ae6db3e05e40b60',
    callbackURL: "http://localhost:3001/auth/github/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    db.users.findOne( {userID: profile.id}, (error, user) => {
      if (user === null) {
        db.users.insert({
          userID: profile.id,
          login: profile.username,
          profile_url: profile.profileUrl,
          displayed_name: profile.displayName
        });
      }
      return done(null, profile);
    });
  }
));

router.get('/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/dashboard');
  });

router.get('/userData', (req, res) => {
  res.json(req.user);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;