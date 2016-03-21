import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { curry } from 'ramda';

import { DriverItem } from '../components/DriverItem';
import { MessageItemList } from '../components/Chat/MessageItemList';

import * as chatAction from '../actionCreators/chat';

export function box({ ride, user, addMessage }) {
  return (
    <div className='chatbox'>
      <DriverItem {...ride.match} />
      <MessageItemList userID={user.user_id} messages={ride.messages}/>
      <div className='textSubmit'>
        <form onSubmit={addMessage(user.user_id, ride.match.user_id)}>
          <input className="messageText ten columns" defaultValue='' id="message"></input>
          <input className="messageSubmit button" type="submit" />
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = function (state) {
  return state.toJS();
};

// jscs:disable
const mapDispatchToProps = function (dispatch) {
  return {
    addMessage: curry(function (user_id, partner_id, e) {
      e.preventDefault();
      let timeStamp = new Date();
      let currentTime = timeStamp.getHours() + ':' + timeStamp.getMinutes();
      let messageObject = {
        userID: user_id,
        time: currentTime,
        text: e.target.firstChild.value,
      };
      e.target.firstChild.value = '';
      dispatch(chatAction.submitMessage(partner_id, messageObject));
    }),
  };
};
// jscs:enable

export const Chat = connect(
  mapStateToProps,
  mapDispatchToProps
)(box);
