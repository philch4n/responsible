export function handleConfirm(state, action) {
  switch (action.type) {
    case 'CONFIRM_RIDE':
      return acceptRideSuccess(state, action);
    case 'ACCEPT_RIDE_SENT':
      return acceptRideSent(state, action);
    case 'ACCEPT_RIDE_ERROR':
      return acceptRideError(state, action);
  }

  return state;
}

function acceptRideSuccess(state, action) {
  console.log('***confirmRide Reducer *** ride confirmed:', action.entry);

  let updates = {
    isMatched: true,
    match: action.entry.match, // rider/driver/match?
  };

  return state.merge(updates);
}

function acceptRideSent(state, action) {
  let updates = {
    isAccepting: true,
  };

  return state.merge(updates);
}

function acceptRideError(state, action) {
  let updates = {
    // re-add the rider we were trying to pair with
    // so that we can opt for another accept attempt.
    isAccepting: false,
    acceptRideError: action.entry,
  };

  return state.merge(updates);
}
