function nullFn() {};

export function ProfileItem({
  title,
  desc,
  onProfileItemClick = nullFn,
}) {
  return (
    <div className="ProfileItem" onClick={ onProfileItemClick }>
      <span className="ProfileItemTitle">{ itemTitle }</span>
      <span className="ProfileItemDesc">{ itemDesc }</span>
    </div>
  );
};
