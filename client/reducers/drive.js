import { Map } from 'immutable';

import { handleDrivers } from './drivers';

export default function(state = Map(), action) {

  switch (action.type) {
    case 'ADD_DRIVER_SENT':
    case 'ADD_DRIVER':
    case 'ADD_DRIVER_ERROR':
      return handleDriver(state, action);
    case 'REMOVE_DRIVER_SENT':
    case 'REMOVE_DRIVER':
    case 'REMOVE_DRIVER_ERROR':
      return handleRemoveDriver(state, action);
  }

  return state;
}
