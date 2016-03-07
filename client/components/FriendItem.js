import { UserImage } from './UserImage';

export function FriendItem({ userImage, userFullName }) {
  return (
    <div className="friendItem">
      <UserImage imageType="icon" userImage={userImage} />
      <span className="friendName">{userFullName}</span>
    </div>
  );
};
