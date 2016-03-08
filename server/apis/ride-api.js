require('../server-helpers');
var RideAPI = require('express').Router();

var Ride = require(__models + '/ride');
var User = require(__models + '/user');

module.exports = RideAPI;

/*
GET all rides
POST new ride
POST new ride pair

*/
//Get all rides
RideAPI.get('/rides', function(req, res){
  Ride.getRides()
    .then(sendStatusAndData(res, 200))
    .catch(sendStatusAndData(res, 500, 'Server error getting rides list')
})

RideAPI.post('/ride/:id', function(req, res){
  var user      = req.params.username
  var location  = req.params.location
  var timestamp =
  Ride.createRide()
})
