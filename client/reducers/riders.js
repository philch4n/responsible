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

function addRider(state, action) {
  let updates = {
    riders: state.push(action.entry),
  };

  return state.merge(updates);
};

function removeRider(state, action) {
  let oldRiders = state.toJS();
  newRiders = oldRiders.filter((rider) => rider.userId !== action.entry);
  let updates = {
    riders: newRiders,
  };

  return state.merge(updates);
}
