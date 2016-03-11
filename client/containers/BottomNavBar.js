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
    return (
      <div className="BottomNavBarContainer row">
        <BottomNavBarButton {...this.props} />
      </div>
    );
  }
};

const mapStateToProps = function (state) {
  return state.toJS();
};

// jscs:disable
// const mapDispatchToProps = function (dispatch) {
//   return {
//     onSettingsButtonClick() {

//       // import push from react-redux-router
//       // dispatch(viewAction.displaySettings(true));
//     },
//     onProfileButtonClick() {
//       dispatch(push('/profile'))
//     }
//   };
// };
// jscs:enable

export const BottomNavBarContainer = connect(
  mapStateToProps

  // mapDispatchToProps
)(BottomNavBar);
