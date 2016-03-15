import { ConfirmLocationButton } from './ConfirmLocationButton';
import { Chat } from '../../containers/Chat';

export function BottomButton({ isWaitingForMatch, isConfirmed, isMatched,
  match, profile, messages, onConfirmLocationButtonClick, }) {
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
          <Chat match={match}  profile={profile} messages={messages}/> :
        <h3>Uh oh. How did this happen?</h3>
    }
    </div>
  );
}
