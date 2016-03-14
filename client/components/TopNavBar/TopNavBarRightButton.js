import { Link } from 'react-router';

import { ProfileButton } from './ProfileButton';
import { CancelRideButton } from './CancelRideButton';

// export function TopNavBarRightButton({ isRider, isDriver, isMatched,
//   isWaitingForMatch, onProfileButtonClick, onCancelRideButtonClick, }) {
export function TopNavBarRightButton({
  user: { isRider, isDriver },
  ride: { isMatched, isWaitingForMatch },
  ...onClicks,
}) {
  if (isDriver || isRider) {
    return (
    <div className="topNavBarRightButton">
      {
        isMatched || isWaitingForMatch ?
          <CancelRideButton {...onClicks} /> :
          isDriver || isRider ?
            <ProfileButton {...onClicks} /> :
            <div className="emptyDiv"></div>
      }
    </div>
    );
  } else {
    return (
      <div />
    );
  }
}
