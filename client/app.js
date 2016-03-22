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
import { LoginContainer } from './containers/Login';

import { socket } from './lib/socketConfig';
import { configureListeners } from './lib/socketListeners';

configureListeners(socket);

const routes = <Route component={Root}>
  <Route path="/" component={MainContainer} />
  <Route path="/profile" component={ProfileContainer} />
  <Route path="/login" component={LoginContainer} />
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

import * as userActions from './actionCreators/user';
import * as rideActions from './actionCreators/ride';

geoWatch();

setInterval(geoWatch, 6000);

const location = {};
const DirectionsService = new google.maps.DirectionsService();

function geoWatch() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (data) {
      location.lat = data.coords.latitude;
      location.lng = data.coords.longitude;
      store.dispatch(userActions.setLocation(location));

      DirectionsService.route({
        origin: location,
        destination: { lat: 30.273835, lng: -97.760507 },
        travelMode: google.maps.TravelMode.DRIVING,
      },
        function (result, status) {
          /*
            Redux uses dispatch to pass actions that look like { type, entry }
            to a reducer to change our application state.
          */

          // rideActions.setDirections(result) //=> { type, entry }

          store.dispatch(rideActions.setDirections(result));
          console.log('these are results', result);
          console.log('these are status', status);
        }
      );
    });
  };
}

