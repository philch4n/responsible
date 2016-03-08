import {FriendItem} from './FriendItem';

export function FriendItemList({ friends }) {
  return (
    <div className="friendList">
    <h1>Your Friends!</h1>
      {
        friends.map(function (friend) {
          return <FriendItem {...friend} />;
        })
      }
    </div>
  );
};
