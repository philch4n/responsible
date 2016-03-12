import { Link } from 'react-router';

import { ProfileButton } from '../components/ProfileButton';
import { CancelRideButton } from '../components/CancelRideButton';

// export function TopNavBarRightButton({ isRider, isDriver, isMatched,
//   isWaitingForMatch, onProfileButtonClick, onCancelRideButtonClick, }) {
export function TopNavBarRightButton({
  user: { isRider, isDriver },
  ride: { isMatched, isWaitingForMatch },
  onProfileButtonClick,
  onCancelRideButtonClick,
}) {
  return (
    /* Jonathan: we can't start with a ternary operation to render the div: Everything has to be
    inside of a wrapper div to start, so it pretty much amounts to what we have anyway */
    <div className="topNavBarRightButton">
      {
        isMatched || isWaitingForMatch ?
          <CancelRideButton onCancelRideButtonClick={onCancelRideButtonClick} /> :
          isDriver || isRider ?
            <ProfileButton onProfileButtonClick={onProfileButtonClick} /> :
            <div className="emptyDiv"></div>
      }
    </div>
  );
}
