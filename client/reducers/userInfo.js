export function handleUserInfo(state, action) {
  switch (action.type) {
    case 'REQUEST_USER_INFO':
      return requestUserInfo(state, action);
    case 'RECEIVE_USER_INFO':
      return receiveUserInfo(state, action);
    case 'REQUEST_USER_INFO_ERROR':
      return requestUserInfoError(state, action);
    case 'RECEIVE_FRIEND_INFO':
      return receiveFriendInfo(state, action);
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
  console.log('received user information from server:', entry);

  let newState;
  let userUpdates = {
    user_id: entry.user.user_id,
    isLoggedIn: true,
    isFetchinguserInfo: false,
    friends: entry.friends,
  };

  let profileUpdates = {
    avatar: entry.user.avatar,
    name: entry.user.name,
    address: entry.user.address,
  };

  newState = state.mergeIn(['profile'], profileUpdates);
  newState = newState.merge(userUpdates);

  return newState;
}

function requestUserInfoError(state, { entry }) {
  console.log('in request user info error reducer');
  let updates = {
    requestUserError: entry,
  };

  return state.merge(updates);
}

function receiveFriendInfo(state, { entry }) {
  let old = state.toJS().friends;
  let newFriend = {
    avatar: entry.avatar,
    name: entry.name,
    id: entry.user_id,
  };
  old.push(newFriend);

  let updates = {
    isFetchingUserInfo: false,
    friends: old,
  };

  return state.merge(updates);
}
