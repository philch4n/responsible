import { List } from 'immuatable';

export function handleDrivers(state = List(), action) {
  console.log('~~reducing Drivers:', state.toJS());

  switch (action.type) {
    case 'ADD_DRIVER':
      return addDriver(state, action);
    case 'REMOVE_DRIVER':
      return removeDriver(state, action);
  }

  return state;
};

function addDriver(state, action) {
  console.log('adding driver');
  let nextState = null;

  if (Array.isArray(action.entry))
    nextState = state.push(...action.entry);
  else
    nextState = state.push(action.entry);

  console.log('next drivers state: ', nextState.toJS());
  return nextState;
};

function removeDriver(state, action) {
  let oldDrivers = state.toJS();
  let newDrivers = oldRiders.filter((driver) => driver.userId !== action.entry);

  return newDrivers;
};
