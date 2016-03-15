import { Map } from 'immutable';

export default function (state = Map(), action) {
  // console.log('reducing user state:', state.toJS());

  switch (action.type) {
    case 'REQUEST_USER_INFO':
    case 'RECEIVE_USER_INFO':
    case 'REQUEST_USER_INFO_ERROR':
      return handleUserInfo(state, action);
    case 'SET_DRIVER':
      return setDriver(state, action);
    case 'SET_RIDER':
      return setRider(state, action);
  };

  return state;
};

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

function requestUserInfo(state, action) {
  let updates = {
    isFetchingUserInfo: true,
  };

  returns state.merge(updates);
}

function setDriver(state, action) {
  let updates = {
    isDriver: action.entry,
    isRider: false,
  };

  return state.merge(updates);
}

function setRider(state, action) {
  let updates = {
    isRider: action.entry,
    isDriver: false,
  };

  return state.merge(updates);
}
