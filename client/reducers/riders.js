import { List, fromJS } from 'immutable';
import { uniqBy, prop } from 'ramda';

export function handleRiders(state = List(), action) {

  // console.log('reducing riders:', state.toJS());
  switch (action.type) {
    case 'ADD_RIDER':
      return addRider(state, action);
    case 'REMOVE_RIDER':
      return removeRider(state, action);
  }

  return state;
}

// adds a rider or array of riders to the state riders list.
function addRider(_state, { entry }) {
  let state = _state.toJS();

  if (!Array.isArray(entry)) entry = [entry];

  state.push(...entry);
  let nextState = uniqBy(prop('user_id'), state);

  return fromJS(nextState);
};

function removeRider(state, { entry }) {
  let oldRiders = state.toJS();
  let newRiders = oldRiders.filter((rider) => rider.user_id !== entry);

  return fromJS(newRiders);
}
