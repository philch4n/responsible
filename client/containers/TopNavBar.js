import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { SettingIcon } from '../components/TopNavBar/Settings/SettingIcon';
import { Logo } from '../components/TopNavBar/Logo';
import { TopNavBarRightButton } from '../components/TopNavBar/RightButton';

import * as userAction from '../actionCreators/user';
import * as rideAction from '../actionCreators/ride';

function TopNavBar({ onCancel, ...props }) {
  let cancelClick;
  if (props.ride.match)
    cancelClick = onCancel.bind(null, props.ride.match.user_id, props.ride.ride_id);
  else
    cancelClick = onCancel.bind(null, props.user.user_id, null);

  return (
    <div className='TopNavBarContainer'>
      <nav className='navbar'>
        <div className='navbar-left'>
          <div className='navbar-item'>
            <SettingIcon {...props}/>
          </div>
        </div>
        <div className='navbar-item'>
          <Logo />
        </div>
        <div className='navbar-right'>
          <div className='CarIcon'>
            <i className='fa fa-car'>
              <TopNavBarRightButton
                {...props}
                onCancel={cancelClick}
              />
            </i>
          </div>
        </div>
      </nav>
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
    onCancel: (user_id, ride_id) => {
      // Our current approach is to modify onCancel in the rendering of our
      // component - a better approach might be to augment that here, where we have access
      // to the component's next props through the second parameter of mapDispatchToProps
      console.log('dispatching cancel:', user_id, ride_id);
      dispatch(rideAction.cancelRide({ user_id, ride_id }))
    },
  };
};
// jscs:enable

export const TopNavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavBar);
