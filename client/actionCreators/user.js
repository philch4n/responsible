import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';
import { headers, json, checkStatus } from '../lib/fetchHelpers';

/*
  expects props to be: {
    user: { name, avatar, username },
    // verifyBy: column name of db to validate
  }
*/
export function fetchUserInfo(props) {
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

export function addFriend(props) {
  return (dispatch) => {
    dispatch(requestUserInfo());

    fetch('/user/friends', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(props),
    })
      .then(checkStatus)
      .then(json)
      .then((info) => dispatch(receiveFriendInfo(info)))
      .catch((error) => dispatch(requestUserInfoError(error)));
  };
};

// Asks the server to update our user_id's address.
export function changeAddress(user_id, newAddress) {
  return (dispatch) => {

    // to keep hold of information in case we want to revert it on error,
    // pass it in to these initiating async calls.
    dispatch(changingAddress());

    fetch('user/', {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({ user_id, address: newAddress }),
    })
      .then(checkStatus)
      .then(() => {
        dispatch(push('/'));
        dispatch(changeAddressSuccess(newAddress));
      })
      .catch((error) => dispatch(changeAddressError(error)));
  };
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
        user_id: info.user.user_id,
      },
    },
  };
};

function requestUserInfoError(error) {
  console.error('uh oh, error requesting user info:', error);
  return { type: 'REQUEST_USER_INFO_ERROR', entry: error };
}

function receiveFriendInfo(info) {
  return { type: 'RECEIVE_FRIEND_INFO', entry: info };
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

export function setLocation(location) {
  return { type: 'SET_LOCATION', entry: location, };
}

function changingAddress() {
  return { type: 'CHANGING_ADDRESS' };
}

function changeAddressSuccess(newAddress) {
  return { type: 'CHANGE_ADDRESS', entry: newAddress };
}

function changeAddressError(error) {
  return { type: 'CHANGE_ADDRESS_ERROR', entry: error };
}
