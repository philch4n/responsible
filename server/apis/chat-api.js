require('../server-helpers');
var ChatAPI = require('express').Router();
var io      = require('socket.io');

var Chat = require(__models + '/chat');

module.exports = ChatAPI;

/*
Incorporate Socket.io
Need POST
Need GET
*/

