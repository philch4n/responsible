import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { SettingIcon } from '../components/TopNavBar/Settings/SettingIcon';
import { Logo } from '../components/TopNavBar/Logo';
import { TopNavBarRightButton } from '../components/TopNavBar/RightButton';

import * as userAction from '../actionCreators/user';
import * as rideAction from '../actionCreators/ride';

function TopNavBar({ onCancel, ...props }) {

  let cancelClick = onCancel.bind(null, null, props.user.id, props.ride.id);
  if (props.ride.match === null) {
    cancelClick = onCancel.bind(null, props.user.id, null);
  }

  return (
    <div className="TopNavBarContainer row">
      <SettingIcon {...props}/>
      <Logo />
      <TopNavBarRightButton
        {...props}
        onCancel={cancelClick}
      />
    </div>
  );
}

const mapStateToProps = function (state) {
  return state.toJS();
};

// jscs:disable
const mapDispatchToProps = function (dispatch) {
  return {
    onSettingsButtonClick() {
      dispatch(push('/settings'))
    },
    onProfileButtonClick() {
      dispatch(push('/profile'))
    },
    onCancel: (userId, rideId) => {
      console.log('dispatching cancel:', userId, rideId);
      dispatch(rideAction.cancelRide({ userId, rideId }))
    },
  };
};
// jscs:enable

export const TopNavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavBar);
