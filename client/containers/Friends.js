import { connect } from 'react-redux';

import { FriendItemList } from '../components/TopNavBar/Friends/FriendItemList';

function nullFn(e) { console.log('you clicked me ' + e.target.className); };

function List({ friends, onFriendClick=nullFn }) {
  return (
    <div className="friendList">
      <FriendItemList friends={friends} />
    </div>
  );
};

const mapStateToProps = function (state) {
  return state.get('user').toJS();
};

// const mapDispatchToProps = function (dispatch) {
//   return {
//     onProfileButtonClick() {
//       dispatch(push('/profile'));
//     },

//     onFriendButtonClick() {
//       dispatch(push('/friends'));
//     },
//   };
// };

export const FriendList = connect(
  mapStateToProps

  // mapDispatchToProps
)(List);
