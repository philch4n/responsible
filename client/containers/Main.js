import { connect } from 'react-redux';

import { TopNavBarContainer } from './TopNavBar';
import { BottomNavBarContainer } from './BottomNavBar';
import { SplashContainer } from './Splash';
import { MapView } from '../components/MapView';
import User from '../models/users';

function Main({ isDriver, isRider }) {
  console.log('isDriver, isRider:', isDriver, isRider);
  return (
    <div className="MainApp">
      <TopNavBarContainer />
      <button onClick={User.facebook}>
        <i className='fa fa-facebook-official'>
        </i>&nbsp;Facebook
      </button>
      <button onClick={User.github}>
        <i className='fa fa-github'>
        </i>&nbsp;GitHub</button>
      <button onClick={User.google}>
        <i className='fa fa-google'>
        </i>&nbsp;Google</button>
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

export const MainContainer = connect(
  mapStateToProps
)(Main);
