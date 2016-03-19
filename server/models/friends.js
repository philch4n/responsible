'use strict';
require('model-helpers');
const db      = require('../../lib/db.js');
const Ride = require(__models + '/rides');
const R = require('ramda');

const Friends = {};
module.exports = Friends;

// jscs: disable
Friends.createFriendship = function (foreign_friend1, foreign_friend2) {
  return db('friends').insert({ foreign_friend1, foreign_friend2 }, ['friendship_id'])
    .then(R.first);
};
// jscs: enable

//Returns an array of friend ids
Friends.getFriendIds = function (user_id) {
  return db('friends').select('*')
    .where({ foreign_friend1: user_id }).orWhere({ foreign_friend2: user_id })
    .catch(reportError('error retrieving friends by userId'))
    .then(function (friendRows) {
      return friendRows.map(function (friendRow) {
        return friendRow.foreign_friend1 === user_id ?
          friendRow.foreign_friend2 :
          friendRow.foreign_friend1;
      });
    });
};

Friends.findFriend = function(searchString) {
  return db('users').select('user_id')
    .where({ username: searchString })
    .orWhere({ 'first_name': searchString })
    .orWhere({ 'last_name': searchString })
    // .orWhere({ 'fullname': searchString })
    .catch(reportError())
}

Friends.findAndAddFriend = function(user_id, searchString) {
  return db('users').select('*')
    .where({ username: searchString })
    .orWhere({ 'first_name': searchString })
    .orWhere({ 'last_name': searchString })
    // .orWhere({ 'fullname': searchString })
    .then(function())
}

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
      friends = _friends;
    })
    .then(Ride.getRiders)
    .then(function (rideArray) {
      riders = rideArray;
    })
    .then(() => R.intersection(friends, riders))
    .catch(function (err) {
      console.log('error', err);
    });
};

