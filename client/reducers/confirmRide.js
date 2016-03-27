export function handleConfirm(state, action) {
  switch (action.type) {
    case 'ACCEPT_RIDE_SUCCESS':
      return acceptRideSuccess(state, action);
    case 'ACCEPT_RIDE_SENT':
      return acceptRideSent(state, action);
    case 'ACCEPT_RIDE_ERROR':
      return acceptRideError(state, action);
    case 'MATCH_FLAG':
      return matchFlag(state, action);
  }

  return state;
}

// entry: { ride_id, match: { user_id, location }}
function acceptRideSuccess(state, { entry }) {
  let updates = {
    isMatched: true,
    ride_id: entry.ride_id,
    match: entry.match,
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

function matchFlag(state, action) {
  let updates = {
    matchFlag: action.entry,
  };

  return state.merge(updates);
}
