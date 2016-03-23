import { UserImage } from './UserImage';

export function RiderItem(props) {

  /* Commented this out to avoid lat/long errors */

  // return (
  //   <div className="riderItem" onClick={onRiderItemClick}>
  //     <div className="rider_id">{user_id}</div>
  //     <div className="lat">{location.lat}</div>
  //     <div className='lng'>{location.lng}</div>
  //   </div>
  // );
  return (
    <div className="riderItem" onClick={props.onRiderItemClick}>
      <UserImage imageType="icon" avatar={props.avatar} />
      <div className="riderName">{props.name}</div>
    </div>
  );
};
