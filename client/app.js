import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { store } from './lib/storeConfig';

import Root from './containers/Root';
import { ProfileContainer } from './containers/Profile';
import { SettingsContainer } from './containers/Settings';
import { MainContainer } from './containers/Main';
import { FriendList } from './containers/Friends';

import { socket } from './lib/socketConfig';
import { configureListeners } from './lib/socketListeners';

configureListeners(socket);

const routes = <Route component={Root}>
  <Route path="/" component={MainContainer} />
  <Route path="/profile" component={ProfileContainer} />
  <Route path="/settings" component={SettingsContainer} />
  <Route path="/friends" component={FriendList} />
</Route>;

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState(state) {
    return state.get('routing').toJS();
  },
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);

geoWatch();

setInterval(geoWatch, 6000);
import * as userActions from './actionCreators/user';
var location = {};
function geoWatch() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (data) {
      location.lat = data.coords.latitude;
      location.lng = data.coords.longitude;

      // console.log('Rider Time Summoned:', new Date(data.timestamp));
      // console.log('locationLat', location.lat);
      // console.log('locationLng', location.lng);
      store.dispatch(userActions.setLocation(location));
    });
  };
}
