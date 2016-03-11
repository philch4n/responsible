import { connect } from 'react-redux';

import { DriveButton } from './DriveButton';
import { CatchARideButton } from './CatchARideButton';
import * as userAction from '../actionCreators/user';

require('../public/styles/skeleton.css');
require('../public/styles/normalize.css');

class Splash extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='splash'>
        <DriveButton {...this.props} />
        <CatchARideButton {...this.props} />
      </div>
    );
  };
};

// jscs:disable
const mapDispatchToProps = function(dispatch) {
  return {
    onDriveButtonClick() {
      dispatch(userAction.setDriver(true));
    },
    onCatchARideButtonClick() {
      dispatch(userAction.setRider(true));
    }
  };
};
// jscs:enable

export const SplashContainer = connect(
  null,
  mapDispatchToProps
)(Splash);
