import { connect } from 'react-redux';
import { push } from 'react-router-redux';

export function Chat() {
  return (
    <div className='chatbox'>
      <h3>Hello</h3>
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
