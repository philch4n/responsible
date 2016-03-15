/**
 *  Handle socket configuration and messaging.
**/

export const socket = io.connect('http://localhost:1337');
socket.on('connection', function (socket) {
  console.log('client connected!');
});

export const socketActionMiddleware =
  (socket) => (store) => (next) => (action) => {
    if (action.meta && action.meta.remote)
      socket.emit(action.meta.event, action.meta.entry);
    return next(action);
  };

function 
