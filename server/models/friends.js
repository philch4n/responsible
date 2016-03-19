'use strict';
require('./model-helpers');
const db      = require('../../lib/db.js');
const User = require(__models + '/user');
const Ride = require(__models + '/rides');
const R = require('ramda');

const Friends = {};
module.exports = Friends;

// jscs: disable
Friends.createFriendship = function (user_id1, user_id2) {
  return db('friends').insert({
    foreign_friend1: user_id1,
    foreign_friend2: user_id2
  }, ['foreign_friend2'])
    .then(R.first);
};
// jscs: enable

//Returns an array of friend ids
Friends.getFriendIds = function (user_id) {
  return db('friends').select('*')
    .where({ foreign_friend1: user_id }).orWhere({ foreign_friend2: user_id })
    .catch(reportError('error retrieving friends by userId' + user_id))
    .then(function (friendRows) {
      return friendRows.map(function (friendRow) {
        return friendRow.foreign_friend1 === user_id ?
          friendRow.foreign_friend2 :
          friendRow.foreign_friend1;
      });
    });
};

Friends.findAndAddFriend = function (user_id, searchString) {
  return User.findUserIdByName(searchString)
    .then(function (user) {
      console.log('found user', user.user_id, 'by name', searchString);
      console.log('befriending:', user_id, user.user_id);

      return Friends.createFriendship(user_id, user.user_id);
    })
    .then(function (friendID) {
      return User.findUserById(friendID[0].foreign_friend2);
    })
    .then(function (friend) {
      return friend;
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

