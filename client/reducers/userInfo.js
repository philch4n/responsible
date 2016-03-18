export function handleUserInfo(state, action) {
  switch (action.type) {
    case 'REQUEST_USER_INFO':
      return requestUserInfo(state, action);
    case 'RECEIVE_USER_INFO':
      return receiveUserInfo(state, action);
    case 'REQUEST_USER_INFO_ERROR':
      return requestUserInfoError(state, action);
  }

  return state;
}

function requestUserInfo(state) {
  let updates = {
    isFetchingUserInfo: true,
  };

  return state.merge(updates);
}

function receiveUserInfo(state, { entry }) {
  let updates = {
    ...entry,
    isFetchingUserInfo: false,
  };

  // This might be merging with the correct objects! look at how nested original state is
  // Might need to pull info out differently/access state differently
  return state.merge(updates);
}

function requestUserInfoError(state, { entry }) {
  let updates = {
    requestUserError: entry,
  };

  return state.merge(updates);
}
