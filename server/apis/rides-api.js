require('../server-helpers');
var RideAPI = require('express').Router();
var io = require('socket.io');

var Ride = require(__models + '/rides');
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
    .catch(sendStatusAndData(res, 500, 'Server error getting rides list'));
});

//Posting
RideAPI.post('/', function (req, res) {
  var ride = req.body;
  Ride.createRide(ride)
    .then(sendStatusAndData(res, 201))
    .catch(sendStatusAndError(res, 500, ('error creating user')));
});
