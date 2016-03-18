var io = require('socket.io');
var IO = {};

module.exports = IO;

IO.io = io;

console.log('********* requiring ioConfig **********');

IO.init = function (server) {
  IO.io = io(server);

  IO.io.on('connection', function (socket) {
    console.log('server connection established');

    // Put each client in a room specified by their user_id.
    // emitted when a user receives their information after logging in with OAuth.
    socket.on('join', function (data) {
      if (!data.user_id) console.error('joining invalid room:', data);

      console.log('server adding socket to room:', data.user_id);
      socket.join(data.user_id, (error) => console.error('error joining room', error));
    });

    // first listener!
    socket.on('send_message', function (data) {
      console.log('what type of socket information do we have here:', socket);
      console.log('send message listener in on connection triggered', data);
    });
  });

  return IO.io;
};
