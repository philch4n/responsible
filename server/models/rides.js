require('../server-helpers');
var db      = require('../../lib/db.js');
const first = require('ramda').head;

var Ride = {};
module.exports = Ride;

Ride.getRides = function () {
  return db.select('*').from('rides')
    .catch(reportError('error getting all rides'))
    .then(function (rides) {
      return rides;
    });
};

Ride.createRide = function (attrs) {
  return db('rides').insert(attrs, ['ride_id', 'foreign_driver', 'foreign_rider'])
    .catch(reportError('error creating ride in db'))
    .then(ride => ride);
};

Ride.deleteRide = function (id) {
  return db('rides').where({ ride_id: id }).del()
    .catch(reportError('error deleting ride by id'));
    .then(ride => console.log('deleted ride with id ' + id))
};

