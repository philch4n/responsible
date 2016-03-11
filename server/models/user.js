require('../server-helpers');
var db      = require('../../lib/db.js');
const first = require('ramda').head;

var User = {};
module.exports = User;

User.getUsers = function () {
  return db.select('*').from('users');
};

User.findUserById = function (userId) {
  return db.select('*').from('users').where({ user_id: userId })
    .catch(reportError('error retrieving username by userId'))
    .then(first);
};

User.deleteUser = function (userId) {
  return db('users').where({ user_id: userId }).del()

  //need to refactor to send back appropriate data
    .then(user => console.log())
    .catch(reportError('error deleting user by id'));
};

User.createUser = function (attrs) {
  return db('users').insert(attrs, ['user_id', 'username', 'first_name'])
    .catch(reportError('error creating user into db'))
    .then(function (user) {
      return user;
    });
};

// Not MVP, moving on
// User.updateUser = function (userId, attrs) {
//   return db('users').insert(attrs, ['id', 'username', 'first_name'])
//     .catch(reportError('error updating user by id'))
//     .then(function (user) {
//       return user;
//     });
// };

/*
User.find
User.findByID
User.updateByID
*/

