require('../server-helpers');
var UserAPI = require('express').Router();

const Ride = require(__models + '/rides');
const User = require(__models + '/user');
const Friends = require(__models + '/friends');

module.exports = UserAPI;

//Get all users
UserAPI.get('/', function (req, res) {
  User.getUsers()
    .then(sendStatusAndData(res, 200))
    .catch(sendStatusAndError(res, 500, 'Server error getting users'));
});

//Get User by ID
UserAPI.get('/:id', function (req, res) {
  var id = req.params.id;
  User.findUserById(id)
    .then(sendStatusAndData(res, 200))
    .catch(sendStatusAndError(res, 500, 'no such user'));
});

UserAPI.post('/', function (req, res) {
  var user = req.body;
  User.createUser(user)
    .then(sendStatusAndData(res, 201))
    .catch(sendStatusAndError(res, 500, ('error creating user')));
});

// Create or update a user on initial login.
//
// expects: {
//  OAuthUser: { user object },
//  verifyBy: OAuthUser property name and users table column name to
//             use to check if this user exists
// }
UserAPI.post('/tmp', function (req, res) {
  console.log('in user-api', req.body);
  var user = req.body.user;

  // verify the users exists by which property of the OAuth object?
  // has to also be a column in the users table.
  var verifyBy = 'OAuthVerify';

  // create user if needed, update attributes if not, and return merged user info
  User.createOrUpdateUser(verifyBy, user)
    .then(sendStatusAndData(res, 201))
    .catch(sendStatusAndError(res, 500, ('error creating user')));
});

/*
  Creates a 'friendship' between two user_ids

  expects request body:
    { user_id1, user_id2 }

  responds with status code 200 on success
*/
UserAPI.post('/friends', function (request, response) {
  console.log('posting to user/friends', request.body);

  var friends = request.body;

  Friends.createFriendship(friends.user_id1, friends.user_id2)
    .then(sendStatus(response, 200))
    .catch(sendStatusAndError(response, 500, 'Server error creating friendship'));
});

UserAPI.put('/:id', function (req, res) {
  var id = req.params.id;
  var attrs = req.params;
  console.log('updating user', id, ' with:', attrs);
  User.updateUser(id, attrs)
    .then(sendStatusAndData(res, 200))
    .catch(sendStatusAndError(res, 500, 'Server error updating user'));
});

UserAPI.delete('/:id', function (req, res) {
  var id = req.params.id;
  User.deleteUser(id)
    .then(sendStatusAndData(res, 200))
    .catch(sendStatusAndError(res, 500));
});

