export function handleAddress(state, action) {
  switch (action.type) {
    case 'CHANGING_ADDRESS':
      return changingAddress(state);
    case 'CHANGE_ADDRESS':
      return changeAddress(state, action);
    case 'CHANGE_ADDRESS_ERROR':
      return changeAddressError(state, action);
  }

  return state;
}

function changeAddress(state, { entry }) {
  let updates = {
    address: entry,
    isChangingAddress: false,
  };

  return state.merge(updates);
}

function changingAddress(state) {
  let updates = {
    isChangingAddress: true,
  };

  return state.merge(updates);
}

function changeAddressError(state, { entry }) {
  let updates = {
    isChangingAddress: false,
    changeAddressError: entry,
  };

  return state.merge(updates);
}
