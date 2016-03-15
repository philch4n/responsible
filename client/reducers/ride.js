import { Map } from 'immutable';

import { handleCancel } from './cancelRide';
import { handleRideFetch } from './fetchRide';
import { handleMessages } from './rideMessages';

// The state passed to this reducer is state.ride
export default function(state = Map(), action) {

  // console.log('reducing ride state:', state.toJS());
  switch (action.type) {
    case 'REQUEST_RIDE':
    case 'RECEIVE_RIDE_ID':
    case 'RECEIVE_RIDE':
    case 'REQUEST_RIDE_ERROR':
      return handleRideFetch(state, action);
    case 'CANCEL_RIDE':
    case 'CANCEL_RIDE_SENT':
    case 'CANCEL_RIDE_ERROR':
      return handleCancel(state, action);
    case 'REQUEST_MESSAGES':
    case 'RECEIVE_MESSAGES':
    case 'REQUEST_MESSAGES_ERROR':
      return handleMessages(state, action);
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
  console.log('inRecieveMatch', action.entry);
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
