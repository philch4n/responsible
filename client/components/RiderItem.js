import { UserImage } from './UserImage';

export function RiderItem({ rider_id, location, onRiderItemClick }) {
  return (
    <div className="riderItem" onClick={onRiderItemClick}>
      <div className="rider_id">{rider_id}</div>
      <div className="lat">{location.lat}</div>
      <div className='lng'>{location.lng}</div>
    </div>
    );
};
