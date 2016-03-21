import { ProfileItem } from './ProfileItem';

export function ProfileItemList({ profileItems = [] }) {
  return (
    <div className="ProfileItemList">
        {
          profileItems.map(function (profileItem) {
            return <ProfileItem
              key={profileItem.title}
              {...profileItem}
            />;
          })
        }
    </div>
  );
};
