import { connect } from 'react-redux';

import { DriveButton } from '../components/Splash/DriveButton';
import { RideButton } from '../components/Splash/RideButton';
import * as userAction from '../actionCreators/user';
import * as driverAction from '../actionCreators/drive';

function Splash(props) {
  return (
    <div className='splash'>
      <DriveButton onDriveClick={props.onDriveClick(props.user_id, props.location)}/>
      <RideButton {...props} />
    </div>
  );
}

// jscs:disable
const mapDispatchToProps = function(dispatch) {
  return {
    onDriveClick(userId, location) {
      dispatch(userAction.setDriver(true));
      dispatch(driverAction.createDriver(userId, location))
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

// createDriver(true, user_id, location)
