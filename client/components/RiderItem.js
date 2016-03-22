import { UserImage } from './UserImage';

export function RiderItem(props) {
  console.log('here we are!', props);

  /* Commented this out to avoid lat/long errors */

  // return (
  //   <div className="riderItem" onClick={onRiderItemClick}>
  //     <div className="rider_id">{user_id}</div>
  //     <div className="lat">{location.lat}</div>
  //     <div className='lng'>{location.lng}</div>
  //   </div>
  // );
  return (
    <div key={props.user_id} className="riderItem" onClick=
      {props.onRiderItemClick.bind(null, props.ride_driver, props.user_id)}>
      <UserImage imageType="icon" avatar={props.avatar} />
      <div className="riderName">{props.name}</div>
    </div>
  );
};

