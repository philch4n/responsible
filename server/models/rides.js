require('../server-helpers');
var db      = require('../../lib/db.js');
const first = require('ramda').head;

var Ride = {};
module.exports = Ride;

Ride.getRides = function () {
  return db.select('*').from('rides');
};

Ride.createRide = function (attrs) {
  return db('rides').insert(attrs, ['ride_id', 'foreign_driver', 'foreign_rider'])
    .catch(reportError('error creating ride in db'))
    .then(function (ride) {
      return ride;
    });
};
