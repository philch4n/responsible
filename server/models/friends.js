'use strict';
require('../server-helpers');
var db      = require('../../lib/db.js');
var Ride = require(__models + '/rides');
var R = require('ramda');
var Friends = {};
module.exports = Friends;

//Returns an array of friend ids
Friends.getFriendIds = function (userId) {
  return db.select('*').from('friends')
    .where({ foreign_friend1: userId }).orWhere({ foreign_friend2: userId })
    .catch(reportError('error retrieving friends by userId'))
    .then(function (friendRows) {
      return friendRows.map(function (friendRow) {
        return friendRow.foreign_friend1 === userId ?
          friendRow.foreign_friend2 :
          friendRow.foreign_friend1;
      });
    });
};

// Takes in user_id, returns intersection array of available drivers and friends
Friends.getFriendDrivers = function (userId) {
  let friends = null;
  let drivers = null;

  return Friends.getFriendIds(userId)
    .then(function (_friends) {
      friends = _friends;
    })
    .then(Ride.getDrivers)
    .then(function (driveArray) {
      drivers = driveArray;
    })
    .then(() => R.intersection(friends, drivers))
    .catch(function (err) {
      console.log('error', err);
    });
};

// Takes in user_id, returns intersection array of available friend riders
Friends.getFriendRiders = function (userId) {
  let friends = null;
  let riders = null;

  return Friends.getFriendIds(userId)
    .then(function (_friends) {
      console.log('THESE ARE FRIENDS', _friends)
      friends = _friends;
    })
    .then(Ride.getRiders)
    .then(function (rideArray) {
      console.log('THESE ARE RIDERS BY ID', rideArray)
      riders = rideArray;
    })
    .then(() => R.intersection(friends, riders))
    .catch(function (err) {
      console.log('error', err);
    });
};

