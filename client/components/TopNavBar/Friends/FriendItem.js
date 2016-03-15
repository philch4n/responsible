import { UserImage } from '../../UserImage';

export function FriendItem({ avatar, fullName, onFriendItemClick }) {
  return (
    <div className="friendItem" onClick={onFriendItemClick}>
      <UserImage imageType="icon" avatar={avatar} />
      <div className="friendName">{fullName}</div>
    </div>
  );
};
