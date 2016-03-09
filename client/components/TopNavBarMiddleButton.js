import { DriveButton } from './DriveButton';
import { DriverItemList } from './DriverItemList';
import { RiderInfoItem } from './RiderInfoItem';

export function TopNavBarMiddleButton({ isDriver, isRider, isMatched,
  isWaitingForMatch, isConfirmed, drivers, friends, }) {
  /* Logic below is to get rider from matchedId, will need to refactor */
  var matched;
  friends.forEach(function (friend) {
    for (var key in friend) {
      if (friend[key] === isMatched) {
        matched = friend;
      }
    }
  });

  return (
    <div className="topNavBarMiddleButton">
      {
        // Main page (not yet driver or rider)
        isDriver === false && isRider === false ?
          <DriveButton /> :

        // Choosing page (user is now a rider but not matched)
        isRider === true && isMatched === null ?
          <DriverItemList drivers={drivers}/> :

        // // User has been matched
        // isMatched !== null && isConfirmed === true && isWaitingForMatch === false ?

        //   // User is driver
        //   isDriver === true ?
            <RiderInfoItem friends={matched}/>

        //   // User is rider
        //     <DriverInfo />
        // : <Error />
      }
    </div>
  );
}
