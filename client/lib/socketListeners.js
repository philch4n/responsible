import { store } from './storeConfig';
const dispatch = store.dispatch;

import * as chatActions from '../actionCreators/chat';
import * as rideActions from '../actionCreators/ride';

/**
 *  Handle socket configuration and messaging.
**/
export function configureListeners(socket) {

  // Example socket listener. When we see the 'receive_message' event,
  // dispatch an addMessage action with the new message data.
  socket.on('receive_message', function (data) {
    console.log('received message from server!:', data);
    dispatch(chatActions.addMessage(data));
  });

  socket.on('new_rider', function (data) {
    console.log('received a new rider!', data);
    dispatch(rideActions.addRider(data));
  });

  // Note: does not actually remove rider BUT SHOULD
  // Event listened to by drivers - alerts them if their current ride is cancelled.
  socket.on('cancel_ride', function (data) {
    console.log('received socket event to remove rider:', data);
    dispatch(rideActions.cancelRideSuccess());
  });

  // Must check implementation
  // Event listened to by drivers - alerts them when a user no longer needs a ride.
  socket.on('remove_rider', function (data) {
    console.log('received socket event to remove rider:', data);
    dispatch(rideActions.removeRider(data.riderId));
  });
};
