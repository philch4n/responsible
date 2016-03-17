var io = require('socket.io');
var IO = {};

module.exports = IO;

IO.io = io;

console.log('********* requiring ioConfig **********');

IO.init = function (server) {
  IO.io = io(server);

  IO.io.on('connection', function (socket) {
    console.log('server connection established');

    // first listener!
    socket.on('send_message', function (data) {
      console.log('what type of socket information do we have here:', socket);
      console.log('send message listener in on connection triggered', data);
    });
  });

  return IO.io;
};
