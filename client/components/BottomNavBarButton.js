import { ConfirmLocationButton } from './ConfirmLocationButton';

export function BottomNavBarButton({ isWaitingForMatch, isMatched, isConfirmed, }) {
  return (
    <div className="BottomNavBarRightButton">
    {
      !isWaitingforMatch && !isConfirmed ?
        <ConfirmLocationButton /> :
      isConfirmed && isWaitingforMatch ?
        <h3>Waiting for a match</h3> :
      isConfirmed && isMatched ?
        <h3>You have a match!</h3> :
        <h3>Uh oh. How did this happen?</h3>
    }
    </div>
  );
}
