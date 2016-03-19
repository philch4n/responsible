import { connect } from 'react-redux';

import { TopNavBarContainer } from './TopNavBar';
import { BottomNavBarContainer } from './BottomNavBar';
import { SplashContainer } from './Splash';
import { MapView } from '../components/MapView';
import { GithubButton } from '../models/Github';
import { RiderItemList } from './RiderItemList';

import * as userAction from '../actionCreators/user';

function Main({ isDriver, isRider, riders }) {
  return (
    <div className="MainApp">
    <button onClick={User.facebook}>Facebook</button>
    <GithubButton />
    <button onClick={User.google}>Google</button>
      <TopNavBarContainer />
      {
        !isDriver && !isRider ?
          <SplashContainer /> :
          <MapView />
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
  let riders = state.toJS().ride.riders;
  let userState = state.toJS().user;
  return {
    isRider: userState.isRider,
    isDriver: userState.isDriver,
    riders: riders,
  };
};

export const MainContainer = connect(
  mapStateToProps
)(Main);
