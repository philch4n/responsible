require('../server-helpers');
var db      = require('../../lib/db.js');
const first = require('ramda').head;

var Message = {};
module.exports = Message;

Message.getMessage = function () {
  return db.select('*').from('messages');
};

Message.getChatById = function (msgId) {
  return db.select('*').from('messages').where({ messages_id: msgId })
    .catch(reportError('error retrieving chat by chatId'))
    .then(first);
};

Message.deleteMessage = function (msgId) {
  return db('messages').where({ message_id: msgId }).del()
    .then(msg => console.log('deleted msg with id ' + id))
    .catch(reportError('error deleting ride by id'));
};
