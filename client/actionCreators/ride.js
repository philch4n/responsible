
export function requestMatch() {
  // initiate a server request for pair.
  // using thunk middleware
  return {
    type: 'REQUEST_MATCH',
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

export function confirmLocation(location) {
  // tell the server!
  return {
    type: 'CONFIRM_LOCATION',
    entry: location,
  };
};
