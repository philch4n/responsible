export function fetchRide(userId, location) {
  return (dispatch) => {
    dispatch(requestRide(location));

    fetch('/rides', { method: 'POST' })
      .then(function (body) {
        let rideId = body.json().id;
        dispatch(receiveRideId(rideId));
      })
      .catch(function (error) {
        dispatch(requestRideError(error));
      });
  };
};

function requestRide(location) {
  return { type: 'REQUEST_RIDE', };
};

function receiveRideId(rideId) {
  return {
    type: 'RECEIVE_RIDE_ID',
    entry: rideId,
  };
};

function requestRideError(error) {
  return {
    type: 'REQUEST_RIDE_ERROR',
    entry: error,
  };
};

function receiveRide(userObj) {
  return {
    type: 'RECEIVE_RIDE',
    entry: userObj,
  };
};

export function cancelRide(rideId) {
  return function (dispatch) {
    dispatch(cancelRideSent());

    fetch(`/ride/${rideId}`, { method: 'DELETE' })
      .then(function () {
        dispatch(cancelRideSuccess());
      })
      .catch(function (error) {
        dispatch(rideCancelError(error));
      });
  };
};

function cancelRideSuccess() {
  return { type: 'CANCEL_RIDE' };
};

function cancelRideSent() {
  return { type: 'CANCEL_RIDE_SENT' }
}

export function rideCancelError(error) {
  return {
    type: 'CANCEL_RIDE_ERROR',
    entry: error,
  };
};
