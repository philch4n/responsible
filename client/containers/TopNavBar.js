import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { SettingIcon } from '../components/TopNavBar/Settings/SettingIcon';
import { Logo } from '../components/TopNavBar/Logo';
import { TopNavBarRightButton } from '../components/TopNavBar/RightButton';

import * as userAction from '../actionCreators/user';
import * as rideAction from '../actionCreators/ride';

function TopNavBar(props) {
  return (
    <div className="TopNavBarContainer row">
      <SettingIcon />
      <Logo />
      <TopNavBarRightButton
        {...props}
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
      // kim!
    },
    onProfileButtonClick() {
      dispatch(push('/profile'))
    },
    onCancelRideButtonClick() {
      dispatch(rideAction.cancelRide())
    },
  };
};
// jscs:enable

export const TopNavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavBar);
