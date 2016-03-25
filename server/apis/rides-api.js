require('../server-helpers');
var RideAPI = require('express').Router();

var io = require('../lib/ioConfig').io;
if (process.env.NODE_ENV === 'test') {
  // jscs: disable
  // might as well disable any other code style checking, too, this is hacky enough
  var MockedSocketIO = {};
  MockedSocketIO.sockets = [];
  MockedSocketIO.to = function () {};
  MockedSocketIO.emitTo = function () {};
  MockedSocketIO.to.emit = function () {};

  io = MockedSocketIO;
  // jscs: enable
}

var Ride = require(__models + '/rides');
var Friends = require(__models + '/friends');
var User = require(__models + '/user');

module.exports = RideAPI;

/*
* Rides routes
*/

// Pairs a user from the riders and drivers table
//  - Informs the rider of a match and the driver's location
//  - Driver already knows the rider's location.
//
// expects req.body: { ride_driver { user_id, location }, ride_rider: integer }
// responds to driver: { ride_id, match: { user_id (of rider), location (of rider)}
// emits to rider: { ride_id, match: { user_id (of driver), location (of driver)}
RideAPI.post('/', function (req, res) {
  var ride = {
    ride_driver: req.body.ride_driver.user_id,
    ride_rider: req.body.ride_rider,
  };

  var infoForRider = {
    match: req.body.ride_driver,
  };

  Ride.createRide(ride)
    .then(function (_ride) {
      var rideId = { ride_id: _ride.ride_id };
      infoForRider.ride_id = _ride.ride_id;

      sendStatusAndData(res, 201, rideId);
    })
    .catch(sendStatusAndError(res, 500, ('error creating user')))
    .then(() => io.to(req.body.ride_rider).emit('confirm_driver', infoForRider));
});

/*
  Removes a ride or rider from the database.

  Effectively ends an ongoing ride or cancel a request for a ride.

  expects req.body:
    { user_id (current user) }
        OR
    { user_id (partner to inform of cancellation), ride_id }
  depending on whether it is a ride in progress of just a request for one.
*/
RideAPI.delete('/', function (req, res) {
  var user_id = req.body.user_id;
  var ride_id = req.body.ride_id;

  var rideExists = false;
  if (ride_id) rideExists = true;

  if (rideExists) {
    console.log('removing ride with id:', req.body);
    Ride.deleteRide(ride_id)

      // user_id is the cancelling user's partner's user_id
      .then(() => io.to(user_id).emit('cancel_ride', null))
      .then(sendStatus(res, 200))
      .catch(sendStatusAndError(res, 500));
  } else {
    console.log('removing rider by id:', req.body);
    Ride.deleteRider(user_id)
      .then(Friends.getFriendDrivers.bind(null, user_id))
      .then((drivingFriends) => io.emitTo(drivingFriends, 'remove_rider', user_id))
      .then(sendStatus(res, 200))
      .catch(sendStatusAndError(res, 500));
  }
});

/*
* Rider routes
*/

// expects req.body: { userId, location }
// response: { }
RideAPI.post('/riders', function (req, res) {
  var attrs = req.body;
  var rider = null;
  var _location = req.body.location;
  var responded = false;

  var riderToInsert = {
    foreign_rider: req.body.userId,
    location: req.body.location,
  };

  Ride.getRiderById(req.body.userId)
    .then(function (rider) {
      if (rider) {
        sendStatusAndError(res, 418, 'Client is already riding',
          new Error('Client is already riding'));
        responded = true;
      } else
        return Ride.createRider(riderToInsert);
    })
    .then(function (newRider) {
      return User.findUserById(newRider.foreign_rider);
    })
    .then(function (user) {
      rider = {
        user_id: user.user_id,
        location: _location,
      };

      return Friends.getFriendDrivers(rider.user_id);
    })
    .then(function (friendDrivers) {
      io.emitTo(friendDrivers, 'add_rider', rider);
      return rider;
    })
    .then(sendStatus(res, 202))
    .catch(function (error) {
      if (!responded)
        sendStatusAndError(res, 500, 'error emiting new rider', error);
    });
});

/*
* Driver routes
*/

// Post Driver
RideAPI.post('/drivers', function (req, res) {
  var attrs = req.body;
  Ride.createDriver(attrs)
    .then((driver) => Friends.getFriendRiders(driver.foreign_driver))
    .then(sendStatusAndData(res, 201))
    .catch(sendStatusAndError(res, 500, 'error creating driver'));
});

RideAPI.delete('/drivers', function (req, res) {
  var id = req.body.user_id;
  Ride.deleteDriver(id)
    .then(sendStatus(res, 204))
    .catch(sendStatusAndError(res, 500, 'error deleting driver'));
});
