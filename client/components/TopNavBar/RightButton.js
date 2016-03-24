import { CancelRideButton } from './CancelRideButton';
import { EndDrivingButton } from './EndDrivingButton';
import { PickUpButton } from './PickUpButton';
import { CompleteRideButton } from './CompleteRideButton';

export function TopNavBarRightButton({
  user: { isRider, isDriver },
  ride: { isMatched, isWaitingForMatch, isPickedUp, isComplete },
  ...onClicks,
}) {

  return (
    <div className="topNavBarRightButton">
    {
      !isDriver && !isRider ?
      <div /> :
      isRider ?
        <CancelRideButton {...onClicks} /> :
        isDriver && !isMatched ?
          <EndDrivingButton {...onClicks} /> :
          !isPickedUp ?
            <PickUpButton {...onClicks} /> :
            <CompleteRideButton {...onClicks} />
    }
    </div>
  );
}

