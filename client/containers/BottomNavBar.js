import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { BottomNavBarButton } from '../components/BottomNavBarButton';

import * as userAction from '../actionCreators/user';
import * as rideAction from '../actionCreators/ride';

require('../public/styles/normalize.css');
require('../public/styles/skeleton.css');

class BottomNavBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    let ride = this.props.ride;
    return (
      <div className="BottomNavBarContainer row">
        <BottomNavBarButton {...ride}
          onConfirmLocationButtonClick={this.props.onConfirmLocationButtonClick} />
      </div>
    );
  }
};

const mapStateToProps = function (state) {
  return state.toJS();
};

// jscs:disable
const mapDispatchToProps = function (dispatch) {
  return {
    onConfirmLocationButtonClick(location) {
      dispatch(rideAction.requestMatch(location))
    },
  };
};
// jscs:enable

export const BottomNavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomNavBar);
