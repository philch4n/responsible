/**
 *  Handle socket configuration and messaging.
**/

export const socket = io.connect('http://localhost:1337');
console.log('socket:', socket);
socket.on('connection', function (socket) {
  console.log('client connected!');
});

export const remoteActionMiddleware =
  (socket) => (store) => (next) => (action) => {
    if (action.meta && action.meta.remote)
      socket.emit(action.meta.event, action.meta.entry);
    return next(action);
  };
