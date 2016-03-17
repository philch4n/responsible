import fetch from 'isomorphic-fetch';

/**
 *  Initializes a ride request. Alerts the server and waits
 *  to receive its upcoming ride Id.
**/
export function fetchRide(userId, location) {
  return (dispatch) => {
    dispatch(requestRide());

    fetch('/riders', {
      method: 'POST',
      body: location,
    })
      .then((body) => dispatch(receiveRideId(body.json().rideId)))
      .catch((error) => dispatch(requestRideError(error)));
  };
};

/**
 *  Sends a request to the server to cancel an in-progress
 *  or pending ride request.
**/
export function cancelRide(rideId) {
  return function (dispatch) {
    dispatch(cancelRideSent());

    fetch(`/rides/${rideId}`, { method: 'DELETE' })
      .then(() => dispatch(cancelRideSuccess()))
      .catch((error) => dispatch(cancelRideError(error)));
  };
};

/**
 *  As a driver, accepts a ride by the rider's Id and passes our current
 *  location to the server.
**/
export function acceptRide(riderId, location) {
  return (dispatch) => {
    dispatch(acceptRideSent());

    fetch('/rides', { method: 'POST', body: { riderId, location } })
      .then((body) => dispatch(confirmRide(body.json())))
      .catch((error) => dispatch(acceptRideError(error)));
  };
};

export function removeRider(riderId) {
  return { type: 'REMOVE_RIDER', entry: riderId };
};

// confirm ride receives a rideId, the partner's object, and the partner's location
export function confirmRide(body) {
  return { type: 'CONFIRM_RIDE', entry: body, };
};

function acceptRideSent() {
  return { type: 'ACCEPT_RIDE_SENT', };
};

function acceptRideError(error) {
  console.error('uh oh, error accepting ride:', error);
  return { type: 'ACCEPT_RIDE_ERROR', entry: error };
};

function requestRide() {
  console.log('requesting ride');
  return { type: 'REQUEST_RIDE', };
};

function receiveRideId(rideId) {
  return { type: 'RECEIVE_RIDE_ID', entry: rideId, };
};

function requestRideError(error) {
  console.error('uh oh, error requesting ride');
  return { type: 'REQUEST_RIDE_ERROR', entry: error, };
};

export function receiveRide(userObj) {
  return { type: 'RECEIVE_RIDE', entry: userObj, };
};

function cancelRideSuccess() {
  return { type: 'CANCEL_RIDE' };
};

function cancelRideSent() {
  return { type: 'CANCEL_RIDE_SENT' };
}

function cancelRideError(error) {
  console.error('uh oh, error canceling ride');
  return { type: 'CANCEL_RIDE_ERROR', entry: error, };
};
