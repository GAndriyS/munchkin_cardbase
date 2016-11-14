'use strict';

let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');

let index = require('./routes/index');
let cards = require('./routes/cards');

let app = express();

// View declaration
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Client folder declaration
app.use(express.static(path.join(__dirname, 'client')));

// Body parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// App routes
app.use('/', index);
app.use('/api', cards);

// Server
let port = 5050;
app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});
