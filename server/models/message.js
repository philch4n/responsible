require('../server-helpers');
var db      = require('../../lib/db.js');
const first = require('ramda').head;

var Message = {};
module.exports = Message;

//Get all messages
Message.getMessage = function () {
  return db.select('*').from('messages');
};

//Get messages by Id
Message.getMessageById = function (msgId) {
  return db.select('*').from('messages').where({ messages_id: msgId })
    .catch(reportError('error retrieving chat by chatId'))
    .then(first);
};

Message.createMessage = function (attrs) {
  return db('messages').insert(attrs, ['messages_id', 'message', 'author'])
    .catch(reportError('error creating message in db'))
    .then(function (user) {
      return user;
    });
};

//Delete Message by ID
Message.deleteMessage = function (msgId) {
  return db('messages').where({ message_id: msgId }).del()
    .then(msg => console.log('deleted msg with id ' + id))
    .catch(reportError('error deleting ride by id'));
};
