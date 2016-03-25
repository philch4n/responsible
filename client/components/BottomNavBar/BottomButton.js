import { connect } from 'react-redux';

import { ConfirmLocationButton } from './ConfirmLocationButton';
import { Chat } from '../../containers/Chat';

import * as rideAction from '../../actionCreators/ride';

export function BottomButton({ isWaitingForMatch, isConfirmed, isMatched,
  match, messages, user_id, friends, confirmLocation, }) {

  return (
    <div className="BottomNavBarRightButton">
    {
      !isWaitingForMatch && !isConfirmed ?
        <ConfirmLocationButton confirmLocation={confirmLocation} /> :
      isConfirmed && isWaitingForMatch ?
        <div className='WaitingClick'>
          <section>
            <div>
              <h2>
              Waiting for a match
              </h2>
            </div>
          </section>
        </div>
        :
      isMatched ?
        <Chat
          user_id={user_id}
          match={match}
          friends={friends}
          messages={messages}
        />
        :
        <h3>Uh oh. How did this happen?</h3>
    }
    </div>
  );
}
