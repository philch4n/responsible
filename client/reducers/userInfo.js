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
  console.log('in userInfo!', entry, 'need to pull out differently!');
  let newState;
  let userUpdates = {
    user_id: entry.user.user_id,
    isFetchinguserInfo: false,
    friends: entry.friends,
  };

  let profileUpdates = {
    avatar: entry.user.avatar,
    fullName: entry.user.first_name + ' ' + entry.user.last_name,
  };

  // newState = state.mergeIn(['friends'], entry.friends);
  newState = state.mergeIn(['profile'], profileUpdates);
  newState = newState.merge(userUpdates);
  console.log('old state', state.toJS());
  console.log('new state?', newState.toJS());

  return newState;
}

function requestUserInfoError(state, { entry }) {
  let updates = {
    requestUserError: entry,
  };

  return state.merge(updates);
}
