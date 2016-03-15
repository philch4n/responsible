import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { curry } from 'ramda';

import { DriverItem } from '../components/DriverItem';
import { MessageItemList } from '../components/Chat/MessageItemList';

import * as chatAction from '../actionCreators/chat';

export function box({ match, id, messages, addMessage, }) {
  return (
    <div className='chatbox'>
      <DriverItem {...match} />
      <MessageItemList userID={id} messages={messages}/>
      <form onSubmit={addMessage(id)}>
        <input className="messageText u-full-width" id="message"></input>
        <input className="messageSubmit button" type="submit" />
      </form>
    </div>
  );
}

const mapStateToProps = function (state) {
  return state.toJS();
};

// // jscs:disable
const mapDispatchToProps = function (dispatch) {
  return {
    addMessage: curry(function (id, e) {
      console.log('userid?', id);
      e.preventDefault();
      let timeStamp = new Date();
      let currentTime = timeStamp.getHours() + ':' + timeStamp.getMinutes();
      var messageObject = {
        userID: id,
        time: currentTime,
        text: e.target.firstChild.value,
      };
      dispatch(chatAction.addMessage(messageObject));
    }),
  };
};

// // jscs:enable

export const Chat = connect(
  mapStateToProps,
  mapDispatchToProps
)(box);
