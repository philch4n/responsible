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
  console.log('parse out that entry!', entry);
  let newState;
  let userUpdates = {
    user_id: entry.user_id,
    isFetchinguserInfo: false,
  };

  let profileUpdates = {
    avatar: entry.avatar,
    fullName: entry.first_name + ' ' + entry.last_name,
  };

  newState = state.mergeIn(['profile'], profileUpdates);
  newState = newState.merge(userUpdates);

  return newState;

  // This might be merging with the correct objects! look at how nested original state is
  // Might need to pull info out differently/access state differently
  // return state.merge(updates);
}

function requestUserInfoError(state, { entry }) {
  let updates = {
    requestUserError: entry,
  };

  return state.merge(updates);
}
