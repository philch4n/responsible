require('../server-helpers');
var db      = require('../../lib/db.js');
const first = require('ramda').head;

var Ride = {};
module.exports = Ride;

// Get all rides
Ride.getRides = function () {
  return db.select('*').from('rides')
    .catch(reportError('error getting all rides'))
    .then(function (rides) {
      return rides;
    });
};

// Create A ride
Ride.createRide = function (attrs) {
  return db('rides').insert(attrs, ['ride_id', 'ride_driver', 'ride_rider'])
    .catch(reportError('error creating ride in db'))
    .then(ride => ride);
};

// Delete A Ride
Ride.deleteRide = function (id) {
  return db('rides').where({ ride_id: id }).del()
    .catch(reportError('error deleting ride by id'))
    .then(ride => console.log('deleted ride with id ' + id));
};

// Get all riders ids. returns array
Ride.getRidersIds = function () {
  return db.select('*').from('rider')
    .catch(reportError('error getting all riders'))
    .then(function (riders) {
      return riders.map(rider => rider.rider_id);
    });
};

// Get a rider by ID
Ride.getRiderById = function (userId) {
  return db.select('*').from('rider').where({ foreign_rider: userId })
    .catch(reportError('error retrieving rider by userId'))
    .then(first);
};

// Create a rider
Ride.createRider = function (attrs) {
  return db('rider').insert(attrs, ['rider_id', 'foreign_rider', 'location'])
    .catch(reportError('error creating ride in db'))
    .then(rider => rider);
};

// Get all drivers, returns array of their ids
Ride.getDrivers = function () {
  return db.select('*').from('driver')
    .catch(reportError('error getting all drivers'))
    .then(function (drivers) {
      return drivers.map(driver => driver.driver_id);
    });
};

// Get driver by ID
Ride.getDriverById = function (userId) {
  return db.select('*').from('driver').where({ foreign_driver: userId })
    .catch(reportError('error retrieving rider by userId'))
    .then(first);
};

// Create a new driver
Ride.createDriver = function (attrs) {
  return db('driver').insert(attrs, ['driver_id', 'foreign_driver', 'location'])
    .catch(reportError('error creating driver in db'))
    .then(driver => driver);
};

