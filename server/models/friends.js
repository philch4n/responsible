require('../server-helpers');
var db      = require('../../lib/db.js');
var Ride = require(__models + '/rides');
var R = require('ramda');
var Friends = {};
module.exports = Friends;

//Returns an array of friends
Friends.getFriendIds = function (userId) {
  return db.select('*').from('friends')
    .where({ foreign_friend1: userId }).orWhere({ foreign_friend2: userId })
    .catch(reportError('error retrieving friends by userId'))
    .then(Friends.filterFriends(friends))
    .then(function (friends) {
      return friends.map(friend => Friends.filterFriends(userId, friend));
    });
};

//Filters through a friend object and returns friend id
Friends.filterFriends = function (userId, friend) {
  if (friend.foreign_friend1 === userId) {
    return friend.foreign_friend2;
  } else {
    return friend.foreign_friend1;
  }
};

/*
  get friends who are drivers
  get friends who are riders
*/

// Takes in user_id, returns intersection of available drivers and friends
Friends.getFriendDrivers = function (userId) {
  return R.inetersection(Ride.getDrivers(), Friends.getFriendIds(userId));
};
