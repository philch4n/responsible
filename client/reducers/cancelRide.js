export function handleCancel(state, action) {
  switch (action.type) {
    case 'CANCEL_RIDE':
      return cancelRide(state, action);
    case 'CANCEL_RIDE_SENT':
      return cancelRideSent(state, action);
    case 'CANCEL_RIDE_ERROR':
      return cancelRideError(state, action);
  };

  return state;
}

function cancelRide(state, action) {
  let updates = {
    isConfirmed: false,
    isMatched: false,
    isWaitingForMatch: false,
    match: null,
  };

  return state.merge(updates);
}

function cancelRideSent(state, action) {
  let updates = {
    isCancelling: true,
  };

  return state.merge(updates);
}

function cancelRideError(state, action) {
  console.error('ERROR CANCELING RIDE! WHY OH WHY?');
  console.error(action);

  let updates = {
    isCancelling: false,
  };

  return state.merge(updates);
}
