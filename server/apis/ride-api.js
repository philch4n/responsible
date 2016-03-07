require('../server-helpers');
var RideAPI = require('express').Router();

var Ride = require(__models + '/ride');
var User = require(__models + '/user');

module.exports = RideAPI;

/*
Driver:
GET routes
POST pickup route

*/
