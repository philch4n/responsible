export function ProfileInfoItem({ profileItemTitle, profileItemDesc, id }) {
  return (
    <div className="ProfileInfoItem">
      <span className="ProfileInfoItemTitle">{ profileItemTitle }</span>
      <span className="ProfileInfoItemDesc">{ profileItemDesc }</span>
    </div>
  );
};
