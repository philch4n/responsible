import { Link } from 'react-router';

import { ProfileButton } from '../components/ProfileButton';
import { CancelRideButton } from '../components/CancelRideButton';

// export function TopNavBarRightButton({ isRider, isDriver, isMatched,
//   isWaitingForMatch, onProfileButtonClick, onCancelRideButtonClick, }) {
export function TopNavBarRightButton({
  user: { isRider, isDriver },
  ride: { isMatched, isWaitingForMatch },
  ...onClicks,
}) {
  if (!isDriver && !isRider) {
    return (
      <div>Hello</div>
    );
  } else {
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
  }
}
