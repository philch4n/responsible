import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { DriverItem } from '../components/DriverItem';
import { MessageItemList } from '../components/Chat/MessageItemList';

function nullFn(e) {
  e.preventDefault();
  var message = e.target.firstChild.value;
};

export function Chat({ match, id, messages, onSubmit=nullFn, }) {
  return (
    <div className='chatbox'>
      <DriverItem {...match} />
      <MessageItemList userID={id} messages={messages}/>
      <form onSubmit={onSubmit}>
        <textarea className="u-full-width" placeholder="I am at..." id="message"></textarea>
        <input className="button-primary" type="submit" value="Submit" />
      </form>
    </div>
  );
}

// const mapStateToProps = function (state) {
//   return state.toJS();
// };

// // jscs:disable
// const mapDispatchToProps = function (dispatch) {
//   return;
// };
// // jscs:enable

// export const Chat = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Chat);
