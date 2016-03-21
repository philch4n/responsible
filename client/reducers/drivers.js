import { List } from 'immuatable';

export function handleDriver(state = List(), action) {
  console.log('~~reducing Drivers:', state.toJS());

  switch (action.type) {
    case 'ADD_DRIVER':
      return addDriver(state, action);
    case 'REMOVE_DRIVER':
      return removeDriver(state, action);
  }

  // Handle all these cases:
  //   case 'ADD_DRIVER_SENT':
  // case 'ADD_DRIVER':
  // case 'ADD_DRIVER_ERROR':
  //   return handleDriver(state, action);
  // case 'REMOVE_DRIVER_SENT':
  // case 'REMOVE_DRIVER':
  // case 'REMOVE_DRIVER_ERROR':
  //   return handleDriver(state, action);

  return state;
};

function addDriver(state, action) {
  //Not gonna work...
  // console.log('adding driver');
  // let nextState = null;

  // if (Array.isArray(action.entry))
  //   nextState = state.push(...action.entry);
  // else
  //   nextState = state.push(action.entry);

  // console.log('next drivers state: ', nextState.toJS());
  // return nextState;
};

function removeDriver(state, action) {
  //Figure this out!
  // let oldDrivers = state.toJS();
  // let newDrivers = oldRiders.filter((driver) => driver.userId !== action.entry);

  // return newDrivers;
};

