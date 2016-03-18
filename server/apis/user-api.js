require('../server-helpers');
var UserAPI = require('express').Router();

var Ride = require(__models + '/rides');
var User = require(__models + '/user');
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

// Create or update a user on initial login.
//
// expects: {
//  OAuthUser: { user object },
//  verifyBy: OAuthUser property name and users table column name to
//             use to check if this user exists
// }
UserAPI.post('/', function (req, res) {
  var user = req.body;
  User.createUser(user)
    .then(sendStatusAndData(res, 201))
    .catch(sendStatusAndError(res, 500, ('error creating user')));
});

UserAPI.post('/tmp', function (req, res) {
  console.log('in user-api', req.body.user, req.body.verifyBy);
  var user = req.body.user;

  // verify the users exists by which property of the OAuth object?
  // has to also be a column in the users table.
  // If names for similar things (ie: picture and avatar) are different,
  // rename them before sending the fetch.
  var verifyBy = 'OAuthId';

  // create user if needed, update attributes if not, and return merged user info
  User.createOrUpdateUser(verifyBy, user)
    .then(sendStatusAndData(res, 201))
    .catch(sendStatusAndError(res, 500, ('error creating user')));
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

