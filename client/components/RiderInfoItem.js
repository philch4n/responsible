import { UserImage } from './UserImage';

export function RiderInfoItem({ match }) {

  /* An object with a friend object gets send along, will probably need to refactor */
  return (
    <div className="riderInfoItem">
      <UserImage imageType="icon" avatar={match.avatar} />
      <span className="riderName">{match.fullName}</span>
    </div>
  );
};
