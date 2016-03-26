/**
 *  This is the socket object the client uses to listen to and
 *  emit socket events! Import it whenever you need it
**/

const connectionString = 'whispering-mountain-79295.herokuapp.com';

// `whispering-mountain-79295.herokuapp.com:${process.env.PORT}`

if (process && process.env.NODE_ENV === 'production') {
  connectionString = 'http://localhost:1337';
}

console.log('connectionString:', connectionString);

export const socket = io.connect(connectionString, {
  reconnectionAttempts: 3,
});

export const socketActionMiddleware =
  (socket) => (store) => (next) => (action) => {
    let meta = action.meta;
    if (meta) {
      socket.emit(meta.event, { to: meta.to, entry: meta.entry });
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
