import fetch from 'isomorphic-fetch';

/**
 *  Initializes a ride request. Alerts the server and waits
 *  to receive its upcoming ride Id.
**/
export function fetchRide(userId, location) {
  return (dispatch) => {
    dispatch(requestRide());

    fetch('/rides', {
      method: 'POST',
      body: location,
    })
      .then(function (body) {
        let rideId = body.json().id;
        dispatch(receiveRideId(rideId));
      })
      .catch(function (error) {
        dispatch(requestRideError(error));
      });
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
      .then(function () {
        dispatch(cancelRideSuccess());
      })
      .catch(function (error) {
        dispatch(cancelRideError(error));
      });
  };
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
