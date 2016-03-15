/**
 *  Handle socket configuration and messaging.
**/

import io from 'socket.io';

export const socket = io();

export const remoteActionMiddleware =
  (socket) => (store) => (next) => (action) => {
    if (action.meta && action.meta.remote)
      socket.emit(action.meta.event, action.meta.entry);
    return next(action);
};
