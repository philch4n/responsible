import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { DriverItem } from '../components/DriverItem';

export function Chat(props) {
  return (
    <div className='chatbox'>
      <DriverItem {...props} />
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
