require('../server-helpers');
var RideAPI = require('express').Router();
var io = require('socket.io');

var Ride = require(__models + '/rides');
module.exports = RideAPI;

/*
* Rides routes
*/

//Get all rides
RideAPI.get('/', function (req, res) {
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
RideAPI.get('/rider', function (req, res) {
  Ride.getRiders()
    .then(sendStatusAndData(res, 201))
    .catch(sendStatusAndError(res, 500, ('error creating rider')));
});

// Get Rider By Id
RideAPI.get('/rider/:id', function (req, res) {
  var id = req.params.id;
  Ride.getRiderById(id)
    .then(sendStatusAndData(res, 200))
    .catch(sendStatusAndError(res, 500));
});

// Post Rider
RideAPI.post('/rider', function (req, res) {
  var attrs = req.body;
  Ride.createRider(attrs)
    .then(sendStatusAndData(res, 201))
    .catch(sendStatusAndError(res, 500, 'error creating rider'));
});

/*
* Driver routes
*/

// Get All Drivers
RideAPI.get('/driver', function (req, res) {
  Ride.getDrivers()
    .then(sendStatusAndData(res, 201))
    .catch(sendStatusAndError(res, 500, 'error retrieving drivers'));
});

// Get driver by id
RideAPI.get('/driver/' + id, function (req, res) {
  var id = req.params.id;
  Ride.getDriverById(id)
    .then(sendStatusAndData(res, 200))
    .catch(sendStatusAndError(res, 500));
});

// Post Driver
RideAPI.post('/driver', function (req, res) {
  var attrs = req.params;
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

