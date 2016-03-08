function nullFn() {};

export function ProfileInfoItem({
  itemTitle,
  itemDesc,
  onProfileItemClick = nullFn,
}) {
  return (
    <div className="ProfileInfoItem" onClick={ onProfileItemClick }>
      <span className="ProfileInfoItemTitle">{ itemTitle }</span>
      <span className="ProfileInfoItemDesc">{ itemDesc }</span>
    </div>
  );
};
