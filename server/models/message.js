require('../server-helpers');
var db      = require('../../lib/db.js');
const first = require('ramda').head;

var Message = {};
module.exports = Message;

//Get all messages
Message.getMessage = function () {
  return db.select('*').from('messages')
    .catch(reportError('error retrieving messages'))
    .then(function (messages) {
      return messages;
    });
};

//Get messages by Id
Message.getMessageById = function (msgId) {
  return db.select('*').from('messages').where({ messages_id: msgId })
    .catch(reportError('error retrieving message by id'))
    .then(first);
};

// Get messages by rideId
Message.getMessagesByRideId = function(rideId) {
  return db.select('*').from('messages').where({ foreign_ride: rideId })
    .catch(reportError('error retrieving messages by roomId'))
}

Message.createMessage = function (attrs) {
  return db('messages').insert(attrs, ['messages_id', 'message', 'author'])
    .catch(reportError('error creating message in db'))
};

//Delete Message by ID
Message.deleteMessage = function (msgId) {
  return db('messages').where({ messages_id: msgId }).del()
    .catch(reportError('error deleting message by id'))
    .then(msg => console.log('deleted msg with id ' + msgId));
};
