import fetch from 'isomorphic-fetch';
import { headers, json, checkStatus } from '../lib/fetchHelpers';

// adds driver to database
export function createDriver(userId, location) {
  return (dispatch) => {
    console.log('HERE IS STUFF IN THE ACTION CREATOR', userId, location);
    dispatch(addDriverSent());

    fetch('/rides/drivers', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ userId, location }),
    })
      .then(checkStatus)
      .catch((error) => dispatch(addDriveError(error)));
  };
};

export function deleteDriver({ driverId }) {
  return (dispatch) => {
    dispatch(removeDriverSent());

    fetch('/rides/drivers/' + driverId, {
      method: 'DELETE',
      headers: headers,
      body: JSON.stringify({ driverId }),
    })
      .then(checkStatus)
      .then(() => dispatch(removeDriverSuccess()))
      .catch((error) => dispatch(deleteDriverError(error)));
  };
};

export function addDriverSent(driver) {
  return { type: 'ADD_DRIVER_SENT', entry: driver, };
};

export function addDriverSuccess() {
  return { type: 'ADD_DRIVER' };
};

export function addDriveError(error) {
  console.log('Error adding driver!');
  return { type: 'ADD_DRIVER_ERROR', entry: error, };
};

export function removeDriverSent(driverId) {
  return { type: 'REMOVE_DRIVER_SENT', entry: driverId };
};

export function removeDriverSuccess() {
  return { type: 'REMOVE_DRIVER' };
};

export function deleteDriverError(error) {
  console.log('Error deleting driver!');
  return { type: 'REMOVE_DRIVER_ERROR', entry: error };
};

