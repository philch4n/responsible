import { Link } from 'react-router';

import { ProfileButton } from '../components/ProfileButton';
import { CancelRideButton } from '../components/CancelRideButton';

export function TopNavBarRightButton({ isMatched, isConfirmed,
  isWaitingForMatch, onProfileButtonClick, onCancelRideButtonClick, }) {
  return (
    <div className="topNavBarRightButton">
      {
        // // User has been matched
        isMatched !== false && isConfirmed === true && isWaitingForMatch === false ?
          <CancelRideButton onCancelRideButtonClick={onCancelRideButtonClick} /> :
          <ProfileButton onProfileButtonClick={onProfileButtonClick} />
      }
    </div>
  );
}
