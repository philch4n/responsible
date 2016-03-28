import { Map } from 'immutable';

import { handleCancel } from './cancelRide';
import { handleConfirm } from './confirmRide';
import { handleRideFetch } from './fetchRide';
import { handleMessages } from './rideMessages';
import { handleRiders } from './riders';
import { handleDriver } from './drivers';
import { handleRideRouting } from './rideRouting';

// The state passed to this reducer is state.ride
export default function(state = Map(), action) {

  // console.log('reducing ride state:', state.toJS());
  switch (action.type) {
    case 'REQUEST_RIDE':
    case 'RECEIVE_RIDE_ID':
    case 'RECEIVE_RIDE':
    case 'REQUEST_RIDE_ERROR':
      return handleRideFetch(state, action);
    case 'ACCEPT_RIDE_SUCCESS':
    case 'ACCEPT_RIDE_SENT':
    case 'ACCEPT_RIDE_ERROR':
    case 'MATCH_FLAG':
      return handleConfirm(state, action);
    case 'CANCEL_RIDE':
    case 'CANCEL_RIDE_SENT':
    case 'CANCEL_RIDE_ERROR':
      return handleCancel(state, action);
    case 'REMOVE_RIDER':
    case 'ADD_RIDER':
      let newRiders = handleRiders(state.get('riders'), action);
      return state.merge({ riders: newRiders.toJS() });
    case 'REQUEST_MESSAGES':
    case 'RECEIVE_MESSAGES':
    case 'REQUEST_MESSAGES_ERROR':
    case 'ADD_MESSAGE':
      return handleMessages(state, action);
    case 'SET_MATCH_LOCATION':
    case 'SET_DIRECTIONS':
    case 'PICKED_UP':
    case 'DROPPED_OFF':
    case 'COMPLETE_RIDE':
      return handleRideRouting(state, action);
    case 'ADD_DRIVER_SENT':
    case 'ADD_DRIVER':
    case 'ADD_DRIVER_ERROR':
    case 'MATCH_RIDER':
      return handleDriver(state, action);
    case 'REMOVE_DRIVER_SENT':
    case 'REMOVE_DRIVER':
    case 'REMOVE_DRIVER_ERROR':
      return handleDriver(state, action);

    // HANDLE USER LOGGING OUT!
  };

  return state;
};
