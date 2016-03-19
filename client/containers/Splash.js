import { connect } from 'react-redux';

import { DriveButton } from '../components/Splash/DriveButton';
import { RideButton } from '../components/Splash/RideButton';
import * as userAction from '../actionCreators/user';
import * as driverAction from '../actionCreators/drive';

function Splash(props) {

  let onDriveClick = props.onDriveClick.bind(props.user_id, props.location);

  return (
    <div className='splash'>
      <DriveButton onDriveClick={onDriveClick}/>
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
