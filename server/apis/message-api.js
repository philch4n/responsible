require('../server-helpers');
var MessageAPI = require('express').Router();
var io      = require('socket.io');

var Message = require(__models + '/message');

module.exports = MessageAPI;

//get all from Message table. Not sure why, but maybe neccessary sometime down the road
MessageAPI.get('/', function (req, res) {
  Message.getMessage()
    .then(sendStatusAndData(res, 200))
    .catch(sendStatusAndData(res, 500, 'Server error getting rides list'));
});

//Get Message between two users
MessageAPI.get('/:id', function (req, res) {
  var id = req.params.id;
  Message.getChatById(id)
    .then(message => res.send(message, 200));
});

// Create chatroom between driver and rider
MessageAPI.post('/', function (req, res) {
  var id = req.params.id;
  Message.createRoom()
    .then(sendStatusAndData(res, 201))
    .catch(sendStatusAndError(res, 500, ('error creating chatroom')));
});

//Create a message in a chatroom
// MessageAPI.post('/:id/:id', function (req, res) {
//   var
// })

// for sockets later
// io.sockets.on('connection', function (socket) {
//   socket.on('send message', function (data) {
//     io.sockets.emit('new message', data);
//   });
// });
