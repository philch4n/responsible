import { CancelRideButton } from './CancelRideButton';
import { EndDrivingButton } from './EndDrivingButton';

// export function TopNavBarRightButton({ isRider, isDriver, isMatched,
//   isWaitingForMatch, onProfileButtonClick, onCancelRideButtonClick, }) {
export function TopNavBarRightButton({
  user: { isRider, isDriver },
  ride: { isMatched, isWaitingForMatch },
  ...onClicks,
}) {
  if (isRider) {
    return (
    <div className="topNavBarRightButton">
      {
        isMatched || isWaitingForMatch ?
          <CancelRideButton {...onClicks} /> :
          <div />
      }
    </div>
    );
  } else if ((isDriver && isMatched) || (isRider && isMatched)) {
    return (
    <div className="topNavBarRightButton">
      {
          <CancelRideButton {...onClicks} />
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
      <div />
      );
  }
}
