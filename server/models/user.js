var db      = require('../../lib/db.js');
const first = require('ramda').head;

var User = {};
module.exports = User;

User.getUsers = function () {
  return db.select('user').from('users');
};

User.findUserById = function (userId) {
  return db.select('username').from('users').where({ id: UserId })
    .catch(reportError('error retrieving username by userId'))
    .then(first);
};

User.deleteUserById = function (userId) {
  return db('user').where({ id: userId }).del()
    .then(user => console.log('deleted user with id' + userId))
    .catch(reportError('error deleting user by id'));
};
<<<<<<< f5e9dfa14d8bce1d8facb4452fda1e0da686cee9
=======

User.createUser = function () {
  return;
};
>>>>>>> (fix) fixing syntax with new jscs linter

User.createUser = function () {
  return;
};

/*
User.find
User.findByID
User.updateByID
*/
