export function handleRideFetch(state, action) {
  switch (action.type) {
    case 'REQUEST_RIDE':
      return requestRide(state, action);
    case 'RECEIVE_RIDE_ID':
      return state.set('id', action.entry);
    case 'RECEIVE_RIDE':
      return receiveRide(state, action);
    case 'REQUEST_RIDE_ERROR':
      return requestRideError(state, action);
  };

  return state;
}

function requestRide(state, action) {
  // isFetchingRide=true!
  let updates = {
    isWaitingForMatch: true,
    isConfirmed: true,
  };

  return state.merge(updates);
}

function receiveRide(state, action) {
  let updates = {
    isWaitingForMatch: false,
    isMatched: true,
    match: action.entry,
  };

  return state.merge(updates);
}

function requestRideError(state, action) {
  let updates = {
    isWaitingForMatch: false,
    isConfirmed: false,
    rideRequestError: action.entry,
  };

  return state.merge(updates);
}
