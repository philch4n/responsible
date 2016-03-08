import {FriendItem} from './FriendItem';

export function FriendItemList({ friends }) {
  return (
    <div className="friendList">
      {
        friends.map(function (friend) {
          return <FriendItem {...friend} />;
        })
      }
    </div>
  );
};
