import { onConfirmLocationButton } from './onConfirmLocationButton';

export function BottomNavBarButton({ ride }) {
  // check props for flags (could refactor?)
  var isWaitingforMatch = ride.isWaitingForMatch;
  var isMatched = ride.isMatched;
  var isConfirmed = ride.isConfirmed;
  return (
    <div className="BottomNavBarRightButton">
    {
      !isWaitingforMatch && !isConfirmed ?
        <onConfirmLocationButton /> :
      isConfirmed && isWaitingforMatch ?
        <h3>Waiting for a match</h3> :
      isConfirmed && isMatched ?
        <h3>You have a match!</h3> :
        <h3>Uh oh. How did this happen?</h3>
    }
    </div>
  );
}
