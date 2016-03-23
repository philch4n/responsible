import { CancelRideButton } from './CancelRideButton';
import { EndDrivingButton } from './EndDrivingButton';
import { PickUpButton } from './PickUpButton';

// export function TopNavBarRightButton({ isRider, isDriver, isMatched,
//   isWaitingForMatch, onProfileButtonClick, onCancelRideButtonClick, }) {
export function TopNavBarRightButton({
  user: { isRider, isDriver },
  ride: { isMatched, isWaitingForMatch, isPickedUp },
  ...onClicks,
}) {
  if (isRider || (isDriver && isMatched)) {
    return (
    <div className="topNavBarRightButton">
      {
        isMatched || isWaitingForMatch ?
          <CancelRideButton {...onClicks} /> :
          <div />
      }
    </div>
    );
  } else if (isDriver && !isMatched) {
    return (
    <div className="topNavBarRightButton">
      {
          <EndDrivingButton {...onClicks} />
      }
    </div>
    );
  } else {
    return (
      <div className="topNavBarRightButton">
      {
          !isPickedUp ?
            <PickUpButton {...onClicks} /> :
            <span>We've been picked up</span>
      }
      </div>
      );
  }
}
