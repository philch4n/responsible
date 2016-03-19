import fetch from 'isomorphic-fetch';
import { headers, json, checkStatus } from '../lib/fetchHelpers';

// adds driver to database
export function createDriver(userId, location) {
  return (dispatch) => {
    dispatch(addDriver());

    fetch('/rides/drivers', {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({ userId, location }),
        })
          .then(checkStatus)
          .catch((error) => dispatch(requestDriverError(error)));
  };
};

export function deleteDriver({ driverId }) {
  return (dispatch) => {
    dispatch(removeDriver());

    fetch('/rides/drivers/' + driverId, {
      method: 'DELETE',
      headers: headers,
      body: JSON.stringify({ driverId }),
    })
      .then(checkStatus)
      .then(() => dispatch(deleteDriverSuccess()))
      .catch((error) => dispatch(deleteDriverError(error)));
  };
};

export function addDriver(driver) {
  return { type: 'ADD_DRIVER', entry: driver, };
};

export function removeDriver(driverId) {
  return { type: 'REMOVE_DRIVER', entry: driverId };
};

export function addDriverSuccess() {}

export function addDriveError() {}

export function deleteDriverSuccess() {}

export function deleteDriverError() {}
