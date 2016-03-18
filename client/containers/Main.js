import { connect } from 'react-redux';

import { TopNavBarContainer } from './TopNavBar';
import { BottomNavBarContainer } from './BottomNavBar';
import { SplashContainer } from './Splash';
import { MapView } from '../components/MapView';
import { GithubButton } from '../models/Github';

import * as userAction from '../actionCreators/user';

function nullFn(e) { console.log('you clicked me ' + e.target.className); };

function Main({ isDriver, isRider, }) {
  console.log('isDriver, isRider:', isDriver, isRider);
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
        isRider ?
        <BottomNavBarContainer /> :
        <div className="empty" />
      }
    </div>
  );
};

const mapStateToProps = function (state) {
  // console.log('main container mapStateToProps state:', state.toJS());

  let userState = state.toJS().user;
  return {
    isRider: userState.isRider,
    isDriver: userState.isDriver,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onGithubClick() {
      dispatch(userAction.fetchUserInfo({ username: 'panda' }));
    },
  };
};

export const MainContainer = connect(
  mapStateToProps
)(Main);
