/**
 *  Handle socket configuration and messaging.
**/

export const socket = io.connect('http://localhost:1337');
console.log('socket:', socket);
socket.on('connection', function (socket) {
  console.log('client connected!');

  socket.on('need_ride', needRide);
  socket.on('confirm_ride', confirmRide);
  socket.on('cancel_ride', cancelRide);
  socket.on('send_message', sendMessage);
  socket.on('receive_message', receiveMessage);
});

export const remoteActionMiddleware =
  (socket) => (store) => (next) => (action) => {
    if (action.meta && action.meta.remote)
      socket.emit(action.meta.event, action.meta.entry);
    return next(action);
  };
