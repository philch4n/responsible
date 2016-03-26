export function handleRideRouting(state, action) {
  switch (action.type) {
    case 'SET_MATCH_LOCATION':
      return setMatchLocation(state, action);
    case 'SET_DIRECTIONS':
      return setDirections(state, action);
    case 'PICKED_UP':
      return setPickedUp(state, action);
    case 'DROPPED_OFF':
      return setDroppedOff(state, action);
    case 'COMPLETE_RIDE':
      return setCompleteRide(state, action);
  }

  return state;
};

function setMatchLocation(state, { entry }) {
  let updates = {
    location: entry,
  };

  return state.mergeIn(['match'], updates);
}

function setDirections(state, { entry }) {
  let updates = {
    directions: entry,
  };

  return state.merge(updates);
}

function setPickedUp(state) {
  let updates = {
    isPickedUp: true,
  };

  window.geoWatch();
  return state.merge(updates);
}

function setCompleteRide(state) {
  let updates = {
    ride_id: null,
    isCompleted: true,
    isPickedUp: false,
    isMatched: false,
    match: null,
    messages: [],
    directions: null,
  };

  return state.merge(updates);
}

function setDroppedOff(state) {
  let updates = {
    ride_id: null,
    isCompleted: true,
    isPickedUp: false,
    isMatched: false,
    isConfirmed: false,
    match: null,
    messages: [],
    directions: null,
  };

  return state.merge(updates);
}
