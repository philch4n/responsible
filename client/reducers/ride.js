import { Map } from 'immutable';

import { handleCancel } from './cancelRide';
import { handleRideFetch } from './fetchRide';

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
  };

  return state;
};


export function handleRideFetch(state, action) {
  switch (action.type) {
    case 'REQUEST_RIDE':
    case 'RECEIVE_RIDE_ID':
    case 'RECEIVE_RIDE':
    case 'REQUEST_RIDE_ERROR':
  }

  return state;
};



function requestRide(state, action) {
  // aciton.entry: location
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
