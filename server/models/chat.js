require('../server-helpers');
var db      = require('../../lib/db.js');
const first = require('ramda').head;

module.exports = Chat;

Chat.getChat = function () {
  return db.select('*').from('chat');
};

Chat.getChatById = function (chatId) {
  return db.select('*').from('chat').where({ id: chatId })
    .catch(reportError('error retrieving chat by chatId'))
    .then(first);
};

/*
getChat
getChatById
*/
