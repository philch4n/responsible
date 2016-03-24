import { Map } from 'immutable';

export function handleDriver(state = Map(), action) {
  // console.log('~~reducing Drivers:', state.toJS());

  switch (action.type) {
    case 'ADD_DRIVER':
      return addDriver(state, action);
    case 'ADD_DRIVER_SENT':
      return addDriverSent(state, action);
    case 'ADD_DRIVER_ERROR':
      return addDriverError(state, action);
    case 'MATCH_RIDER':
      return matchRider(state, action);
    case 'REMOVE_DRIVER':
      return removeDriver(state, action);
    case 'REMOVE_DRIVER_SENT':
      return removeDriverSent(state, action);
    case 'REMOVE_DRIVER_ERROR':
      return removeDriverError(state, action);
  };
  return state;
};

function addDriver(state, action) {
  let updates = {
    isWaitingForMatch: true,
    riders: action.entry,
  };

  return state.merge(updates);
};

function addDriverSent(state, action) {
  let updates = {
    isAddingDriver: true,
  };
  return state.merge(updates);
};

function addDriverError(state, action) {
  let updates = {
    isWaitingForMatch: false,
    isAddingDriver: false,
    driverAddError: action.entry,
  };
  return state.merge(updates);
};

function removeDriver(state, action) {
  let updates = {
    isDriver: false,
    isWaitingForMatch: false,
    isAddingDriver: false,
    isConfirmed: false,
    isMatched: false,
    match: null,
    driverAddError: null,
  };

  // console.log('~_~_~STATE_~_~_~', state.merge(updates).toJS());
  return state.merge(updates);
};

function removeDriverSent(state, action) {
  let updates = {
    isRemovingDriver: true,
  };
  return state.merge(updates);
};

function removeDriverError(state, action) {
  let updates = {
    driverAddError: action.entry,
  };
  return state.merge(updates);
};

function matchRider(state, { entry }) {
  let updates = {
    isWaitingForMatch: false,
    isMatched: true,
    isCompleted: false,
    match: entry.match,
    ride_id: entry.ride_id,
  };

  return state.merge(updates);
}
