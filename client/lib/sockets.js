import { dispatch } from './storeConfig';

import * as chatActions from '../actionCreators/chat';
import * as rideACtions from '../actionCreators/ride';

/**
 *  Handle socket configuration and messaging.
 *
 *
**/

export const socket = io.connect('http://localhost:1337');
socket.on('connect_error', function (error) {
  console.log('error connecting client socket');
});

socket.on('message', function (data) {
  console.log('received client socket message', data);
});

socket.on('connect_timeout', function (data) {
  console.log('server socket connection attempt timed out!');
});

socket.on('connect', function () {
  console.log('client socket connected!');

  socket.on('need_ride', function (data) {
    console.log('need_ride socket action not implemented');
    console.log('received data:', data);
  });

  /**
   *  emitted by driver, listened to by rider
  **/
  socket.on('confirm_ride', function (data) {
    console.log('confirm_ride socket action not implemented');
    console.log('received data:', data);
  });

  socket.on('cancel_ride_request', function (data) {
    console.log('cancel_ride_request socket action not implemented');
    console.log('received data:', data);
  });

  socket.on('remove_driver', function (data) {
    console.log('remove_driver socket action not implemented');
    console.log('received data:', data);
  });

  socket.on('remove_rider', function (data) {
    // in-progress ride has been canceled by driver/rider
    // reset ride state to bring user back to confirm-location page
    console.log('canceling ride with data:', data);
    dispath(rideActions.removeRider(data.riderId));
  });

  socket.on('receive_message', function (data) {
    console.log('received message from server!:', data);
    dispatch(chatActions.addMessage(data));
  });

  socket.emit('send_message', 'first test message!');
});

export const socketActionMiddleware =
  (socket) => (store) => (next) => (action) => {
    if (action.meta && action.meta.remote)
      socket.emit(action.meta.event, action.meta.entry);

    return next(action);
  };
