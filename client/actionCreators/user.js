import fetch from 'isomorphic-fetch';
import { headers, json, checkStatus } from '../lib/fetchHelpers';

// expects props to be: { first_name, last_name, avatar, username, verifyBy }
export function fetchUserInfo(props) {
  console.log('in userActionCreator', props);
  return (dispatch) => {
    dispatch(requestUserInfo());

    fetch('/user/tmp', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(props),
    })
      .then(checkStatus)
      .then(json)
      .then((info) => dispatch(receiveUserInfo(info)))
      .catch((error) => dispatch(requestUserInfoError(error)));
  };
};

function requestUserInfo() {
  return { type: 'REQUEST_USER_INFO' };
}

/*
  The meta property here is picked up by a piece of middleware to emit
  socket events. It emits to the server an event with the name: meta.event
  and a data load of meta.entry
*/
function receiveUserInfo(info) {
  return {
    type: 'RECEIVE_USER_INFO',
    entry: info,
    meta: {
      event: 'join',
      entry: {
        user_id: info.user_id,
      },
    },
  };
};

function requestUserInfoError(error) {
  console.error('uh oh, error requesting user info:', error);
  return { type: 'REQUEST_USER_INFO_ERROR', entry: error };
}

export function setDriver(isDriver) {
  return { type: 'SET_DRIVER', entry: isDriver };
}

export function setRider(isRider) {
  return { type: 'SET_RIDER', entry: isRider, };
}

export function signout(info) {
  return { type: 'SIGNOUT', entry: info };
}
