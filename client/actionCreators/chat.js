export function fetchMessages(rideId) {
  return (dispatch) => {
    dispatch(requestMessages());

    fetch(`/message/${rideId}`)
      .then(function (messages) {
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

function requestMessagesError(error) {
  return {
    type: 'REQUEST_MESSAGES_ERROR',
    entry: error,
  };
};

function receiveMessages(messages) {
  return {
    type: 'RECEIVE_MESSAGES',
    entry: messages,
  };
};
