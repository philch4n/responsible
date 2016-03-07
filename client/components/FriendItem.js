import { UserImage } from './UserImage';

export function FriendItem({ avatar, fullName }) {
  return (
    <div className="friendItem">
      <UserImage imageType="icon" avatar={avatar} />
      <span className="friendName">{fullName}</span>
    </div>
  );
};
