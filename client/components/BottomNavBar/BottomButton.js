import { connect } from 'react-redux';

import { ConfirmLocationButton } from './ConfirmLocationButton';
import { Chat } from '../../containers/Chat';

import * as rideAction from '../../actionCreators/ride';

export function Button({ isWaitingForMatch, isConfirmed, isMatched,
  match, profile, messages, onConfirmLocationButtonClick, onWaitingClick, }) {
  console.log('isWaitingForMatch:', isWaitingForMatch);
  console.log('isConfirmed:', isConfirmed);
  return (
    <div className="BottomNavBarRightButton">
    {
      !isWaitingForMatch && !isConfirmed ?
        <ConfirmLocationButton
          onConfirmLocationButtonClick={onConfirmLocationButtonClick}
        /> :
      isConfirmed && isWaitingForMatch ?
        <h3 onClick={onWaitingClick}>Waiting for a match</h3> :
      isConfirmed && isMatched ?
          <Chat match={match}  profile={profile} messages={messages}/> :
        <h3>Uh oh. How did this happen?</h3>
    }
    </div>
  );
}

const mapStateToProps = function (state) {
  return state.toJS();
};

// jscs:disable
const mapDispatchToProps = function (dispatch) {
  let pair = {
    id: 12,
    avatar: 'http://www.funcage.com/blog/wp-content/uploads/2013/'
     + '11/Cute-Animals-Saying-Hi-To-You-001.jpg',
    fullName: 'Lazy Harp Seal',
  }
  return {
    onWaitingClick() {
      dispatch(rideAction.receiveMatch(pair))
    },
  };
};
// jscs:enable

export const BottomButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
