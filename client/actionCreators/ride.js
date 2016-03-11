export function requestMatch(location) {
  // initiate a server request for pair.
  // using thunk middleware
  return {
    type: 'REQUEST_MATCH',
    entry: location,
  };
};

export function receiveMatch(userObj) {
  return {
    type: 'RECEIVE_MATCH',
    entry: userObj,
  };
};

export function cancelRide() {
  // tell the server!
  return {
    type: 'CANCEL_RIDE',
  };
};
