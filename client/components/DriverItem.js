import { UserImage } from './UserImage';
import { Chat } from '../containers/Chat';

function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function DriverItem({ isDriver, name, avatar, onRideInfoButtonClick = nullFn, }) {
  return (
    <div className="driverItem" onClick={onRideInfoButtonClick}>
      <UserImage imageType="icon" avatar={avatar} />
      {
        isDriver
          ? <span className="userName">Go get {name}!</span>
          : <span className="userName">{name} is coming!</span>
      }
    </div>
  );
};
