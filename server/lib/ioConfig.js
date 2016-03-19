var io = require('socket.io');
var IO = {};

module.exports = IO;

IO.io = io;

IO.init = function (server) {
  IO.io = io(server);

  IO.io.on('connection', function (socket) {
    // Put each client in a room specified by their user_id.
    // emitted when a user receives their information after logging in with OAuth.
    socket.on('join', function (data) {
      if (!data.user_id) console.error('joining invalid room:', data);

      console.log('server adding socket to room:', data.user_id);
      socket.join(data.user_id);
    });

    // first listener!
    socket.on('new_message', function (data) {
      console.log('server new_message listener triggered', data);

      socket.broadcast.to(data.to).emit('new_message', data.entry);
    });
  });

  IO.io.emitTo = function (roomArray, event, payload) {
    roomArray.map(function (roomId) {
      IO.io.to(roomId).emit(event, payload);
    });
  };

  return IO.io;
};
