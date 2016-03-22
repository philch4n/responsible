import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { BottomButton } from '../components/BottomNavBar/BottomButton';

import * as userAction from '../actionCreators/user';
import * as rideAction from '../actionCreators/ride';

/* Jonathan: does this feel too clunky to you? I was debating passing down props and
pulling out the objects we need in each container (like: props.ride). Not sure... */
function BottomNavBar({ user, ride, confirmLocation }) {
  return (
    <div className="BottomNavBarContainer row">
      <BottomButton {...ride} {...user}
        confirmLocation={
          confirmLocation.bind(null, user.user_id, user.friends, user.location)
        }
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
    confirmLocation(userId, friends, location) {
      dispatch(rideAction.fetchRide(userId, friends, location))
    },
  };
};
// jscs:enable

export const BottomNavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomNavBar);
