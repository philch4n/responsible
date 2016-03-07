import { ProfileInfoItem } from './ProfileInfoItem';

export function ProfileInfoItemList({ profileInfoItems }) {
  return (
    <div className="ProfileInfoItemList">
      profileInfoItems.map(function(profileItem){
        return <ProfileInfoItem {...profileItem} />
      };
    </div>
  );
};
