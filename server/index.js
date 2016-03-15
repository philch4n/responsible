require('./server-helpers');
var browserify   = require('browserify-middleware');
var express      = require('express');
var Reactify     = require('reactify');
var Path         = require('path');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var morgan       = require('morgan');
var db           = require(__dirname + '/../lib/db');

var routes       = express.Router();

// no browserify, utilize webpack
var appBundle = Path.resolve(__dirname, '../dist');
var assetFolder = Path.resolve(__dirname, '../client/public');

routes.use(express.static(assetFolder));

routes.get('/app-bundle.js', function (req, res) {
  res.sendFile(appBundle + '/app-bundle.js');
});

routes.get('/', function (req, res) {
  res.sendFile(appBundle + '/index.html');
});

//Example test route for test
routes.get('/api/tags-example', function (req, res) {
  res.send(['node', 'express', 'browserify', 'react', 'react-dom']);
});

if (process.env.NODE_ENV !== 'test') {
  // Dev or production mode

  var app = express();

  //HTTP request logger middleware

  app.use(require('morgan')('dev'));

  //parse request body as JSON
  app.use(require('body-parser').json());
  app.use(bodyParser.urlencoded({ extended: true }));

  //for cookies
  app.use(cookieParser());

  //Mounting router mount
  app.use('/', routes);

  var message = require('./apis/message-api');
  var rides = require('./apis/rides-api');
  var user = require('./apis/user-api');

  routes.use('/message', message);
  routes.use('/rides', rides);
  routes.use('/user', user);

  //Catch-all Route (needs to go last so it doesn't interfere with other routes)
  routes.get('/*', function (req, res) {
    console.log('***this is a catch-all route!***');

    res.sendFile(appBundle + '/index.html');
  });

  // Start the server!
  var port = process.env.PORT || 1337;
  app.listen(port);
  console.log('Listening on port', port);

} else {
  //for test, export:
  var user = require('./apis/user-api');
  var rides = require('./apis/rides-api');
  var message = require('./apis/message-api');

  routes.use('/user', user);
  routes.use('/rides', rides);
  routes.use('/messages', message);

  module.exports = routes;
};

