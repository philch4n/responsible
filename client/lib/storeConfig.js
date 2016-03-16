import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

import { socket, socketActionMiddleware } from './sockets';

import routeReducer from '../reducers/route';
import userReducer from '../reducers/user';
import rideReducer from '../reducers/ride';

import InitialState from '../initialState';

const reducersWithRouter = combineReducers({
  user: userReducer,
  ride: rideReducer,
  routing: routeReducer,
});

const historyMiddleware = routerMiddleware(browserHistory);

export const store = createStore(
  reducersWithRouter,
  fromJS(InitialState),
  applyMiddleware(
    historyMiddleware,
    socketActionMiddleware(socket),
    thunkMiddleware
  )
);
