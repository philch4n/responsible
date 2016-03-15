require('../server-helpers');
var MessageAPI = require('express').Router();
var io      = require('socket.io');

var Message = require(__models + '/message');
var User = require(__models + '/user');

module.exports = MessageAPI;

//get all from Message table. Not sure why, but maybe neccessary sometime down the road
MessageAPI.get('/', function (req, res) {
  Message.getMessage()
    .then(sendStatusAndData(res, 200))
    .catch(sendStatusAndError(res, 500, 'Server error getting all messages'));
});

//Get Message between two users
MessageAPI.get('/:id', function (req, res) {
  var id = req.params.id;
  Message.getMessagesByRideId(id)
    .then(sendStatusAndData(res, 200))
    .catch(sendStatusAndError(res, 500, 'Server error getting message'));
});

// Create chatroom between driver and rider
MessageAPI.post('/:ride_id', function (req, res) {
  var attrs = req.body;
  Message.createMessage(attrs)
    .then(sendStatusAndData(res, 201))
    .catch(sendStatusAndError(res, 500, ('error creating chatroom')));
});

MessageAPI.delete('/:id', function (req, res) {
  var id = req.params.id;
  Message.deleteMessage(id)
    .then(sendStatusAndData(res, 200))
    .catch(sendStatusAndError(res, 500));
});

// for sockets later
// io.sockets.on('connection', function (socket) {
//   socket.on('send message', function (data) {
//     io.sockets.emit('new message', data);
//   });
// });
