'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');

const index = require('./routes/index');
const cards = require('./routes/cards');
// const authentication = require('./routes/authentication');

const app = express();

// View declaration
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Client folder declaration
app.use(express.static(path.join(__dirname, 'client')));

// Body parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

// App routes
app.use('/', index);
app.use('/api', cards);
// app.use('/login', authentication);


// serialize and deserialize
passport.serializeUser(function(user, done) {
  console.log('serializeUser: ' + user);
  done(null, user._id);
});
passport.deserializeUser(function(id, done) {
  console.log(id);
  done(null, id);
});

// Server
let port = 5050;
app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});
