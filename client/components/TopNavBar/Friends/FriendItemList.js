import {FriendItem} from './FriendItem';

function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function FriendItemList({ friends, onFriendClick=nullFn }) {
  return (
    <div className="friendList">
    <h3>Your Friends!</h3>
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
