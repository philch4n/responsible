import { UserImage } from './UserImage';

export function FriendItem({ avatar, fullName, onFriendItemClick }) {
  return (
    <div className="friendItem" onClick={onFriendItemClick}>
      <UserImage imageType="icon" avatar={avatar} />
      <span className="friendName">{fullName}</span>
    </div>
  );
};
