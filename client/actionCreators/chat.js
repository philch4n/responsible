import fetch from 'isomorphic-fetch';

export function fetchMessages(rideId) {
  return (dispatch) => {
    dispatch(requestMessages());

    fetch(`/messages/${rideId}`)
      .then(function (messages) {
        let messages = messages.json();
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
  return { type: 'REQUEST_MESSAGES_ERROR', entry: error, };
};

