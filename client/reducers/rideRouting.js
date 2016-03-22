
export function handleRideRouting(state, action) {
  switch (action.type) {
    case 'SET_MATCH_LOCATION':
      return setMatchLocation(state, action);
    case 'SET_DIRECTIONS':
      return setDirections(state, action);
  }

  return state;
};

function setMatchLocation(state, action) {
  let updates = {
    location: action.entry,
  };

  return state.mergeIn(['match'], updates);
}

function setDirections(state, action) {
  let updates = {
    directions: action.entry,
  };

  return state.merge(updates);
}
