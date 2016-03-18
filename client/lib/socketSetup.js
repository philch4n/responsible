/**
 *  This is the socket object the client uses to listen to and
 *  emit socket events! Import it whenever you need it
**/
export const socket = io.connect('http://localhost:1337');

export const socketActionMiddleware =
  (socket) => (store) => (next) => (action) => {
    let meta = action.meta;
    if (meta) {
      if (meta.broadcast) {
        if (!meta.to) {
          console.error("error broadcasting socket message, no 'to' field specified.");
        } else {
          socket.broadcast
            .to(meta.to)
            .emit(meta.event, meta.entry);
        }
      } else {
        socket.emit(meta.event, meta.entry);
      }
    }

    return next(action);
  };

/**
 *  Configure socket connection settings here.
**/
socket.on('connect', function () {
  console.log('client socket connected');
});

socket.on('connect_error', function (error) {
  console.log('error connecting client socket (did server shut down?)');
});

socket.on('connect_timeout', function (data) {
  console.log('server socket connection attempt timed out!');
});
