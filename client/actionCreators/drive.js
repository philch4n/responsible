import fetch from 'isomorphic-fetch';
import { headers, json, checkStatus } from '../lib/fetchHelpers';

// adds driver to database
export function createDriver(userId, location) {
  return (dispatch) => {
    dispatch(addDriverSent());

    fetch('/rides/drivers', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ userId, location }),
    })
      .then(checkStatus)
      .then(json)
      .then((riders) => {
        console.log('retrieved riders from server:', riders);
        dispatch(addDriverSuccess(riders));
      })
      .catch((error) => dispatch(addDriveError(error)));
  };
};

export function deleteDriver(driverId) {
  return (dispatch) => {
    dispatch(removeDriverSent());

    fetch('/rides/drivers', {
      method: 'DELETE',
      headers: headers,
      body: JSON.stringify({ user_id: driverId }),
    })
      .then(checkStatus)
      .then(() => dispatch(removeDriverSuccess()))
      .catch((error) => dispatch(removeDriverError(error)));
  };
};

export function addDriverSent() {
  return { type: 'ADD_DRIVER_SENT', };
};

export function addDriverSuccess(riders) {
  return { type: 'ADD_DRIVER', entry: riders };
};

export function addDriveError(error) {
  console.log('Error adding driver!');
  return { type: 'ADD_DRIVER_ERROR', entry: error, };
};

export function removeDriverSent() {
  return { type: 'REMOVE_DRIVER_SENT', };
};

export function removeDriverSuccess() {
  return { type: 'REMOVE_DRIVER' };
};

export function removeDriverError(error) {
  console.log('Error deleting driver!', error);
  return { type: 'REMOVE_DRIVER_ERROR', entry: error };
};

