require('../server-helpers');
var UserAPI = require('express').Router();

var Ride = require(__models + '/ride');
var User = require(__models + '/user');
module.exports = UserAPI;

//Get all users
UserAPI.get('/', function (req, res) {
  User.getUsers()
    .then(users => res.send(users))
    .catch(err => console.log(err));
});

//Get User by ID
UserAPI.get('/:id', function (req, res) {
  var id = req.params.id;
  User.findUserById(id)
    .then(sendStatusAndData(res, 200))
    .catch(sendStatusAndError(res, 500, 'no such user'));
});

//Create a user
UserAPI.post('/', function (req, res) {
  var user = req.body;
  User.createUser(user)
    .then(sendStatusAndData(res, 201))
    .catch(sendStatusAndError(res, 500, ('error creating user')));
});

UserAPI.put('/:id', function (req, res) {
  var id = req.params.id;

  // console.log('LMAOOOOOO', id);
  User.updateById(id, request.body)
    .then(() => User.findByID(id))
    .then(user => res.send(user));
});

UserAPI.delete('/:id', function (req, res) {
  var id = req.params.id;
  User.deleteUser(id)
    .then(sendStatusAndData(res, 200))
    .catch(sendStatusAndError(res, 500));
});

UserAPI.post('/*', function (req, res) {
  res.send(200);
});
