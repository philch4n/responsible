function nullFn() {};

export function ProfileInfoItem({
  profileItemTitle,
  profileItemDesc,
  onProfileItemClick = nullFn
}) {
  return (
    <div className="ProfileInfoItem" onClick={ onProfileItemClick }>
      <span className="ProfileInfoItemTitle">{ profileItemTitle }</span>
      <span className="ProfileInfoItemDesc">{ profileItemDesc }</span>
    </div>
  );
};
