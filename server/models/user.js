'use strict';
require('../server-helpers');
var db      = require('../../lib/db.js');
const first = require('ramda').head;

var User = {};
module.exports = User;

// get all users
User.getUsers = function () {
  return db('users').select('*')
    .catch(reportError('error retrieving username by userId'));
};

User.findUserBy = function (byWhat, isWhat) {
  return db('users').select('*').where({ [byWhat]: isWhat })
    .catch(reportError('error finding a user by ' + byWhat))
    .then(first);
};

User.findUserById = function (userId) {
  return User.findUserBy('user_id', userId);
};

// delete at user by their user_id
User.deleteUser = function (userId) {
  return db('users').where({ user_id: userId }).del()
    .catch(reportError('error deleting user by id'))
    .then(user => console.log('DELETING user:', user));
};

/**
 *  attrs is (all of the time?) an OAuth user object.
 *  We look in the DB for some unique property of this object
 *  if a user is found we update it, otherwise we create a
 *  new user with the OAuth object info.
 *
 *  returns: the whole user object
**/
User.createOrUpdateUser = function (verifyBy, attrs) {
  return User.findUserBy(verifyBy, attrs[verifyBy])
    .then(function (foundEntry) {
      if (foundEntry) {
        let userPropsToUpdateWithOAuth = {
          first_name: attrs.name,
          email: attrs.email,
          avatar: attrs.avatar,
        };
        return User.updateUser(foundEntry.user_id, userPropsToUpdateWithOAuth);
      } else {
        return User.createUser(attrs);
      }
    })
    .then(function (_attrs) {
      return User.findUserById(_attrs.user_id);
    })
    .catch(reportError('ERROR doing something creating/updating user. investigate'));
};

// username should probably just be name
User.createUser = function (attrs) {
  return db('users').insert(attrs, ['user_id', 'username', 'email', 'avatar'])
    .catch(reportError('error creating user into db'));
};

// username should probably just be name
User.updateUser = function (userId, attrs) {
  return db('users')
    .where({ user_id: userId })
    .update(attrs, ['user_id', 'username', 'email', 'avatar'])
      .then(first)
      .catch(reportError('error updating user by id:' + userId));
};

//
// uncomment to see how/if createOrUpdateUser is working.
//

// let verifyBy = 'zipcode';
// let OAuthUserObj1 = {
//   zipcode: 53240,
//   username: 'Ronnie Tu-tu',
//   email: 'rick@roll.groove',
//   avatar: 'imaginaryMindscape',
// };
// let OAuthUserObj2 = {
//   zipcode: 22222,
//   username: 'Jalapeno on a Stick',
//   email: 'just send it up my butt',
//   avatar: 'master hand',
//   first_name: 'Jap',
// };

// User.createOrUpdateUser(verifyBy, OAuthUserObj1)
//   .then(function (data) {
//     console.log('updated user data:', data);
//   });

// User.createOrUpdateUser(verifyBy, OAuthUserObj2)
//   .then(function (data) {
//     console.log('new user data:', data);
//   });
