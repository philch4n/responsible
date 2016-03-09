import {FriendItem} from './FriendItem';

export function FriendItemList({ friends, onFriendClick }) {
  return (
    <div className="friendList">
    <h1>Your Friends!</h1>
      {
        friends.map(function (friend) {
          return <FriendItem
            key={friend.id}
            onFriendItemClick={onFriendClick.bind(null, friend.id)}
            {...friend}
          />;
        })
      }
    </div>
  );
};
