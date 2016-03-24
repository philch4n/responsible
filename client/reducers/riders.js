import { List } from 'immutable';

export function handleRiders(state = List(), action) {

  console.log('reducing riders:', state.toJS());
  switch (action.type) {
    case 'ADD_RIDER':
      return addRider(state, action);
    case 'REMOVE_RIDER':
      return removeRider(state, action);
  }

  return state;
}

// adds a rider or array of riders to the state riders list.
function addRider(state, action) {
  let nextState = null;

  if (Array.isArray(action.entry))
    nextState = state.push(...action.entry);
  else
    nextState = state.push(action.entry);

  return nextState;
};

function removeRider(state, action) {
  let oldRiders = state.toJS();
  let newRiders = oldRiders.filter((rider) => rider.userId !== action.entry);

  return newRiders;
}
