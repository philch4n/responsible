import { connect } from 'react-redux';

import { DriveButton } from '../components/Splash/DriveButton';
import { RideButton } from '../components/Splash/RideButton';
import * as userAction from '../actionCreators/user';

function Splash(props) {
  return (
    <div className='splash'>
      <DriveButton {...props} />
      <RideButton {...props} />
    </div>
  );
}

// jscs:disable
const mapDispatchToProps = function(dispatch) {
  return {
    onDriveButtonClick() {
      dispatch(userAction.setDriver(true));
    },
    onRideButtonClick() {
      dispatch(userAction.setRider(true));
    }
  };
};
// jscs:enable

export const SplashContainer = connect(
  null,
  mapDispatchToProps
)(Splash);
