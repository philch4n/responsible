import { connect } from 'react-redux';

import { TopNavBarContainer } from './TopNavBar';
import { BottomNavBarContainer } from './BottomNavBar';
import { SplashContainer } from './Splash';
import { MapView } from '../components/MapView';
import { GithubButton } from '../models/Github';
import { RiderItemList } from './RiderItemList';

import { End } from '../components/End';

import * as userAction from '../actionCreators/user';
import * as rideActions from '../actionCreators/ride';

function Main({
  user: { isLoggedIn, location, profile, isDriver, isRider, },
  ride: { riders, isMatched, match, directions, },
}) {
  return (
    <div className="MainApp">
      <TopNavBarContainer />
      {
        !isDriver && !isRider ?
          <SplashContainer /> :
          <MapView match={match}
            location={location}
            riders={riders}
            directions={directions}
            isDriver={isDriver}
            isRider={isRider}
          />
      }
      {
        isDriver && !match ?
          <RiderItemList /> :
          <div className="empty" />
      }
      {
        isRider || (isDriver && isMatched) ?
        <BottomNavBarContainer /> :
        <div className="empty" />
      }
      <End />
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

  };
};

export const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
