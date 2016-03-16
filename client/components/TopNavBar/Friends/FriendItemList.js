import {FriendItem} from './FriendItem';

function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function FriendList({ friends, onFriendClick=nullFn }) {
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