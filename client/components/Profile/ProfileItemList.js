import { ProfileItem } from './ProfileInfoItem';

export function ProfileItemList({ profileItems = [] }) {
  return (
    <div className="ProfileItemList">
        {
          profileItems.map(function (profileItem) {
            return <ProfileInfoItem {...profileItem} />;
          })
        }
    </div>
  );
};
