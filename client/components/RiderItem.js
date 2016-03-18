import { UserImage } from './UserImage';

export function RiderItem({ avatar, fullName, onRiderItemClick }) {
  return (
    <div className="riderItem" onClick={onRiderItemClick}>
      <UserImage image="icon" avatar={avatar} />
    <div className="riderName">{fullName}</div>
    </div>
    );
};
