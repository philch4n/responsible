import fetch from 'isomorphic-fetch';

import { socket } from '../lib/socketSetup';

export function fetchMessages(rideId) {
  return (dispatch) => {
    dispatch(requestMessages());

    fetch(`/messages/${rideId}`)
      .then(function (inputs) {
        let messages = inputs.json();
        dispatch(receiveMessages(messages));
      })
      .catch(function (error) {
        dispatch(requestMessagesError(error));
      });
  };
};

function requestMessages() {
  return { type: 'REQUEST_MESSAGES' };
};

function receiveMessages(messages) {
  return { type: 'RECEIVE_MESSAGES', entry: messages, };
};

function requestMessagesError(error) {
  console.error('uh oh, error requesting ride messages:', error);
  return { type: 'REQUEST_MESSAGES_ERROR', entry: error, };
};

// message: { userId, time, text }
export function addMessage(message) {
  return { type: 'ADD_MESSAGE', entry: message, };
};

/*
  The meta property here is picked up by a piece of middleware to emit
  socket events. It emits to the server an event with the name: meta.event
  and a data load of meta.entry
*/
export function submitMessage(partnerId, message) {
  // return addMessage creator if we want to automatically add the message
  // instead of waiting for the message to be retransmitted by the server.
  //     return addMessage(message);
  return {
    type: 'NotAnAction',
    entry: message,
    meta: {
      event: 'send_message',
      to: partnerId,
      entry: message,
    },
  };
}
