import { Map } from 'immutable';

import { handleUserInfo } from './userInfo';

export default function (state = Map(), action) {
  console.log('reducing user state:', state.toJS());

  switch (action.type) {
    case 'REQUEST_USER_INFO':
    case 'RECEIVE_USER_INFO':
    case 'REQUEST_USER_INFO_ERROR':
      return handleUserInfo(state, action);
    case 'SET_DRIVER':
      return setDriver(state, action);
    case 'SET_RIDER':
      return setRider(state, action);
    case 'SIGNOUT':
      return signout(state, action);
  };

  return state;
};

function setDriver(state, { entry }) {
  let updates = {
    isDriver: entry,
    isRider: false,
  };

  return state.merge(updates);
}

function setRider(state, { entry }) {
  let updates = {
    isRider: entry,
    isDriver: false,
  };

  return state.merge(updates);
}

function signout(state, { entry }) {
  let updates = {
    isDriver: false,
    isRider: false,
    id: null,
    profile: null,
    friends: [],
  };

  return state.merge(updates);
}
