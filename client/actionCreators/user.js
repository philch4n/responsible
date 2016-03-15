import fetch from 'isomorphic-fetch';

export function fetchUserInfo(uniqueParam) {
  return (dispatch) => {
    dispatch(requestUserInfo())

    fetch(`/users/${uniqueparam}`)
      .then((info) => dispatch(receiveUserInfo(info)))
      .catch((error) => dispatch(requestUserInfoError(error)));
  };
};

function requestUserInfo() {
  return { type: 'REQUEST_USER_INFO' };
}

function receiveUserInfo(info) {
  return { type: 'RECEIVE_USER_INFO', entry: info };
}

function requestUserInfoError(error) {
  return { type: 'REQUEST_USER_INFO_ERROR', entry: error };
}

export function setDriver(isDriver) {
  return { type: 'SET_DRIVER', entry: isDriver };
}

export function setRider(isRider) {
  return {
    type: 'SET_RIDER',
    entry: isRider,
  };
}
