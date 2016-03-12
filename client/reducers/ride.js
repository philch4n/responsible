import { Map } from 'immutable';

export default function(state = Map(), action) {
  // console.log('reducing ride state:', state.toJS());

  switch (action.type) {
    case 'REQUEST_MATCH':
      return requestMatch(state, action);
    case 'RECEIVE_MATCH':
      return receiveMatch(state, action);
    case 'CANCEL_RIDE':
      return cancelRide(state, action);
  };

  return state;
}

function requestMatch(state, action) {
  // aciton.entry: location
  let updates = {
    isWaitingForMatch: true,
    isConfirmed: true,
  };

  return state.merge(updates);
}

function receiveMatch(state, action) {
  let updates = {
    isWaitingForMatch: false,
    isMatched: true,
    match: action.entry,
  };

  return state.merge(updates);
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
