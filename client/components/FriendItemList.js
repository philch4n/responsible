import {FriendItem} from './FriendItem';

export function FriendItemList({ friends }) {
  return (
    friends.map(function (friend) {
      return <FriendItem {...friend} />;
    })
  );
};
