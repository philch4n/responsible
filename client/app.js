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

const DirectionsService = new google.maps.DirectionsService();

geoWatch();
setInterval(geoWatch, 6000);
function geoWatch() {
  if (!navigator.geolocation) return;

  navigator.geolocation.getCurrentPosition(function (data) {
    let user = store.getState().get('user').toJS();
    let ride = store.getState().get('ride').toJS();
    let nextLocation = {
      lat: data.coords.latitude,
      lng: data.coords.longitude,
    };

    //!!! Removed for testing of socket new_location events!
    if (false && user.location && !haveMoved(user.location, nextLocation, 2e-7)) {
      return;
    } else {
      if (!ride.match)
        store.dispatch(userActions.setLocation(nextLocation));
      else
        store.dispatch(userActions.setLocation(nextLocation, ride.match));
    }

    if (!ride.match) return;
    let destination = ride.match.location;
    if (ride.isPickedUp) {
      let friendRider = user.friends.find((friend) => friend.user_id === ride.match.user_id);
      if (user.isRider) destination = user.profile.address;
      else destination = friendRider.address;
    }

    console.log('routing to:', destination);
    DirectionsService.route({
      origin: nextLocation,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING,
    }, function (result, status) {
        store.dispatch(rideActions.setDirections(result));
      }
    );
  });
}

function haveMoved(curLocation, nextLocation, tol) {
  if (Math.abs(curLocation.lat - nextLocation.lat) > tol ||
      Math.abs(curLocation.lng - nextLocation.lng) > tol)
    return true;
  else
    return false;
}
