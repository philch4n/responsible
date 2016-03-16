import { connect } from 'react-redux';

import {FriendItem} from './FriendItem';

export function FriendList({ friends, onFriendClick }) {
  return (
    <div className="friendList">
    <h1>Your Friends!</h1>
      {
        friends.map(function (friend) {
          return <FriendItem
            key={friend.id}
            onFriendItemClick={onFriendClick}

            // onFriendItemClick={onFriendClick.bind(null, friend.id)}
            {...friend}
          />;
        })
      }
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

export const FriendItemList = connect(
  mapStateToProps

  // mapDispatchToProps
)(FriendList);
