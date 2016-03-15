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
export function confirmRide(riderId, location) {
  return (dispatch) => {
    dispatch(confirmRideSent());

    fetch('/rides', { method: 'POST', body: { riderId, location } })
      .then((body) => dispatch(confirmRideSuccess(body.json())))
      .catch((error) => dispatch(confirmRideError(error)));
  };
};

function confirmRideSuccess(body) {
  return { type: 'CONFIRM_RIDE', entry: body, };
};

function confirmRideSent() {
  return { type: 'CONFIRM_RIDE_SENT', };
};

function requestRide() {
  console.log('requesting ride');
  return { type: 'REQUEST_RIDE', };
};

function receiveRideId(rideId) {
  return { type: 'RECEIVE_RIDE_ID', entry: rideId, };
};

function requestRideError(error) {
  console.error('error requesting ride');
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
  console.error('error canceling ride');
  return { type: 'CANCEL_RIDE_ERROR', entry: error, };
};
