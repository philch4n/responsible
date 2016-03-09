import { DriveButton } from './DriveButton';
import { DriverItemList } from './DriverItemList';
import { RiderInfoItem } from './RiderInfoItem';

export function TopNavBarMiddleButton({ isDriver, isRider, isMatched,
  isWaitingForMatch, isConfirmed, drivers, friends, onMiddleButtonClick, }) {

  /* Logic below is to get rider from matchedId, will need to refactor */
  var matched;
  friends.forEach(function (friend) {
    for (var key in friend) {
      if (friend[key] === isMatched) {
        matched = friend;
      }
    }
  });

  matched = matched ||  {
    fullName: 'bogus',
    avatar: 'http://compliancebuilding.com/wp-content/uploads' +
    '/2013/10/monster-mash-and-compliance.jpg',
  };

  return (
    <div className="topNavBarMiddleButton">
      {
        // Main page (not yet driver or rider)
        isDriver === false && isRider === false ?
          <DriveButton onMiddleButtonClick={onMiddleButtonClick.bind(null, 'isDriver')} /> :

        // Choosing page (user is now a rider but not matched)
        isRider === true && isMatched === null ?
          <DriverItemList drivers={drivers}/> :

        // // User has been matched
        // isMatched !== null && isConfirmed === true && isWaitingForMatch === false ?

        //   // User is driver
        //   isDriver === true ?
            <RiderInfoItem
              match={matched}
              onMiddleButtonClick={onMiddleButtonClick.bind(null, 'displayMatchInfo')}
            />

        //   // User is rider
        //     <DriverInfo onClick={onMiddleButtonClick.bind(null, 'driverInfoView')} />
        // : <Error />
      }
    </div>
  );
}
