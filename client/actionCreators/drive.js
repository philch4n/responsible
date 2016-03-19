import fetch from 'isomorphic-fetch';
import { headers, json, checkStatus } from '../lib/fetchHelpers';

export function fetchDriver(userId, location) {
  return (dispatch) => {

    fetch('/rides/drivers')
  }
}
