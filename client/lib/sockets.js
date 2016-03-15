import { dispatch } from '../storeConfig';

/**
 *  Handle socket configuration and messaging.
**/

export const socket = io.connect('http://localhost:1337');
socket.on('connection', function (socket) {
  console.log('client connected!');

  socket.on('need_ride', needRide);

  /**
   *  emitted by driver, listened to by rider
  **/
  socket.on('confirm_ride', confirmRide);
  socket.on('cancel_ride_request', cancelRide);
  socket.on('remove_driver', removeDriver);
  socket.on('cancel_ride', function () {
    // in-progress ride has been canceled by driver/rider
    // reset ride state to bring user back to confirm-location page 
  });

  socket.on('receive_message', function () {
    // message received from
  });
});

// jscs: disable
export const socketActionMiddleware =
  (socket) => (store) => (next) => (action) => {
    if (action.meta && action.meta.remote)
      socket.emit(action.meta.event, action.meta.entry);

    return next(action);
  };
// jscs: enable

function confirmRide({ rideId, driver, }) {

}
