
// uses DriverItem (and not FriendItem) for own styling
import {DriverItem} from './DriverItem';

export function DriverItemList({ friends }) {
  return (
    <div className="driverList">
      {
        friends.map(function (friend) {
          return <DriverItem {...friend} />;
        })
      }
    </div>
  );
};
