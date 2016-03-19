import { connect } from 'react-redux';

import { push } from 'react-router-redux';

import { TopNavBarContainer } from './TopNavBar';
import { BottomNavBarContainer } from './BottomNavBar';
import { SplashContainer } from './Splash';
import { MapView } from '../components/MapView';
import { GithubButton } from '../models/Github';
import { RiderItemList } from './RiderItemList';

import * as userAction from '../actionCreators/user';
import * as rideActions from '../actionCreators/ride';

function Main({
  user: { isLoggedIn, profile, isDriver, isRider, },
  ride: { riders, match, location, directions, },
  redirectToProfile,
}) {
  if (isLoggedIn && !profile.address) {
    redirectToProfile();
  }

  //if !loggedIn redirectToLogin

  return (
    <div className="MainApp">
    <button onClick={User.facebook}>Facebook</button>
    <GithubButton />
    <button onClick={User.google}>Google</button>
      <TopNavBarContainer />
      {
        !isDriver && !isRider ?
          <SplashContainer /> :
          <MapView isRider={isRider} match={match} location={location} directions={directions} />
      }
      {
        isDriver ?
          <RiderItemList riders={riders} /> :
          <div className="empty" />
      }
      {
        isRider ?
        <BottomNavBarContainer /> :
        <div className="empty" />
      }
    </div>
  );
};

const mapStateToProps = function (state) {
  // console.log('main container mapStateToProps state:', state.toJS());
  return state.toJS();
};

const mapDispatchToProps = function (dispatch) {
  return {
    onDirectionsResult(result) {
      // dispatch(rideActions.setDirections(result));
    },
    redirectToProfile() {
      dispatch(push('/profile'));
    }
  };
};

export const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
