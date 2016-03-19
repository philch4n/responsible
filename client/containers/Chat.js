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
      <div className='textSubmit'>
        <form onSubmit={addMessage(id)}>
          <input className="messageText ten columns" defaultValue='' id="message"></input>
          <input className="messageSubmit button" type="submit" />
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = function (state) {
  return state.get('ride').toJS();
};

// jscs:disable
const mapDispatchToProps = function (dispatch) {
  return {
    addMessage: curry(function (id, e) {
      e.preventDefault();
      let timeStamp = new Date();
      let currentTime = timeStamp.getHours() + ':' + timeStamp.getMinutes();
      let messageObject = {
        userID: id,
        time: currentTime,
        text: e.target.firstChild.value,
      };
      e.target.firstChild.value = '';
      dispatch(chatAction.submitMessage(55, messageObject));
    }),
  };
};
// jscs:enable

export const Chat = connect(
  mapStateToProps,
  mapDispatchToProps
)(box);
