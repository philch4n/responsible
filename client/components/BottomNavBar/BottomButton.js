import { ConfirmLocationButton } from './ConfirmLocationButton';

export function BottomButton({ isWaitingForMatch, isMatched,
  isConfirmed, onConfirmLocationButtonClick, }) {
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
        <h3>Waiting for a match</h3> :
      isConfirmed && isMatched ?
        <h3>You have a match!</h3> :
        <h3>Uh oh. How did this happen?</h3>
    }
    </div>
  );
}
