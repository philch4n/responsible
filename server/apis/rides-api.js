require('../server-helpers');
var RideAPI = require('express').Router();

var io = require('../lib/ioConfig').io;
if (process.env.NODE_ENV === 'test') {
  var MockedSocketIO = {};
  MockedSocketIO.sockets = [];
  MockedSocketIO.sockets.emit = function () {};
  io = MockedSocketIO;
}

var Ride = require(__models + '/rides');
var Friends = require(__models + '/friends');
var User = require(__models + '/user');

// var express = require('express');
// var app = express();
// var server = require('http').createServer(app);
// var io = require('socket.io')(server);

module.exports = RideAPI;

/*
* Rides routes
*/

//Get all rides
RideAPI.get('/', function (req, res) {
  // io.sockets.emit('receive_message', { id: 9, text: 'gassy', time: '22:50' });

  Ride.getRides()
    .then(sendStatusAndData(res, 200))
    .catch(sendStatusAndError(res, 500, ('error getting rides')));
});

//Posting
RideAPI.post('/', function (req, res) {
  var ride = req.body;
  Ride.createRide(ride)
    .then(sendStatusAndData(res, 201))
    .catch(sendStatusAndError(res, 500, ('error creating user')));
});

RideAPI.get('/:id', function (req, res) {
  var id = req.params.id;
  Ride.getRideById(id)
    .then(sendStatusAndData(res, 200))
    .catch(sendStatusAndError(res, 500));
});

// Delete ride by id
RideAPI.delete('/:id', function (req, res) {
  var id = req.params.id;
  Ride.deleteRide(id)
    .then(sendStatusAndData(res, 200))
    .catch(sendStatusAndError(res, 500));
});

/*
* Rider routes
*/

// Get All Riders
RideAPI.get('/riders', function (req, res) {
  Ride.getRiders()
    .then(sendStatusAndData(res, 201))
    .catch(sendStatusAndError(res, 500, ('error creating rider')));
});

// Get Rider By Id
RideAPI.get('/riders/:id', function (req, res) {
  var id = req.params.id;
  Ride.getRiderById(id)
    .then(sendStatusAndData(res, 200))
    .catch(sendStatusAndError(res, 500));
});

// Post Rider
RideAPI.post('/riders', function (req, res) {
  var attrs = req.body;
  var rider = null;
  var location = null;

  Ride.createRider(attrs)
    .then(function (newRider) {
      location = newRider[0].location;
      return User.findUserById(newRider[0].foreign_rider);
    })
    .then(function (user) {
      rider = user;
      rider.location = location;
      return Friends.getFriendDrivers(rider.foreign_rider);
    })
    .then(function (arrayOfFriendDrivers) {
      // console.log('this is the io object', io)
      io.sockets.emit('new_rider', rider);
      return rider;
    })
    .catch(sendStatusAndError(res, 500, 'error emiting new rider'))
    .then(sendStatusAndData(res, 201));
});

/*
* Driver routes
*/

// Get All Drivers
RideAPI.get('/drivers', function (req, res) {
  Ride.getDrivers()
    .then(sendStatusAndData(res, 201))
    .catch(sendStatusAndError(res, 500, 'error retrieving drivers'));
});

// Get driver by id
RideAPI.get('/drivers/:id', function (req, res) {
  var id = req.params.id;
  Ride.getDriverById(id)
    .then(sendStatusAndData(res, 200))
    .catch(sendStatusAndError(res, 500));
});

// Post Driver
RideAPI.post('/drivers', function (req, res) {
  var attrs = req.body;
  Ride.createDriver(attrs)
    .then(sendStatusAndData(res, 201))
    .catch(sendStatusAndError(res, 500, 'error creating driver'));
});

/*
* Sockets
*/

// io.sockets.on('connection', function (socket) {
//   socket.on('send message', function (data) {
//     io.sockets.emit('new message', data);
//   });
//   socket.on('something else')
// });

