import { store } from './storeConfig';
const dispatch = store.dispatch;

import * as chatActions from '../actionCreators/chat';
import * as rideACtions from '../actionCreators/ride';

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
};
