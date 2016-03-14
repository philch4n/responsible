require('../server-helpers');
var RideAPI = require('express').Router();
var io = require('socket.io');
var Ride = require(__models + '/ride');
var User = require(__models + '/user');

module.exports = RideAPI;

/*
GET all rides
POST new ride
POST new ride pair

*/

//Get all rides
RideAPI.get('/', function (req, res) {
  Ride.getRides()
    .then(sendStatusAndData(res, 200))
    .catch(sendStatusAndError(res, 500, 'Server error getting rides list'));
});

//create a new ride
RideAPI.post('/', function (req, res) {
  var attrs = req.params;
  Ride.createRide(attrs)
    .then(sendStatusAndData(res, 200))
    .catch(sendStatusAndError(res, 500, 'Server error getting message'));
});

RideAPI.delete('/:id', function (req, res) {
  var id = req.params.id;
  console.log('req params', req.params);
  Ride.deleteRide(id)
    .then(sendStatusAndData(res, 204))
    .catch(sendStatusAndError(res, 500, 'Error deleting ride by id'));
});
