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
  console.log('adding ride. Check state - have not verified this works');
  if (Array.isArray(action.entry))
    return state.push(...action.entry);
  else
    return state.push(action.entry);
};

function removeRider(state, action) {
  let oldRiders = state.toJS();
  newRiders = oldRiders.filter((rider) => rider.userId !== action.entry);
  let updates = {
    riders: newRiders,
  };

  return state.merge(updates);
}
