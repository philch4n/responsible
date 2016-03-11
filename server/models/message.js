require('../server-helpers');
var db      = require('../../lib/db.js');
const first = require('ramda').head;

module.exports = Message;

Message.getMessage = function () {
  return db.select('*').from('Message');
};

Message.getChatById = function (chatId) {
  return db.select('*').from('chat').where({ id: chatId })
    .catch(reportError('error retrieving chat by chatId'))
    .then(first);
};

/*
getChat
getChatById
*/
