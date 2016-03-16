import fetch from 'isomorphic-fetch';

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
  return { type: 'REQUEST_MESSAGES_ERROR', entry: error, };
};

export function addMessage(message) {
  return {
    type: 'ADD_MESSAGE',
    entry: message,
  };
};
