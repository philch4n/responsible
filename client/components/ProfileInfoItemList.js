import { ProfileInfoItem } from './ProfileInfoItem';

function ProfileInfoItemList({ profileInfoItems }) {
  return (
    <div className="ProfileInfoItemList">
      profileInfoItems.map(function(profileItem){
        return <ProfileInfoItem {...profileItem} />
      };
    </div>
  );
};
