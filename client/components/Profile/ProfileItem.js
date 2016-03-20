function nullFn() {};

export function ProfileItem({
  title,
  desc,
  onProfileItemClick = nullFn,
}) {
  return (
    <div className="ProfileItem" onClick={ onProfileItemClick }>
      <span className="ProfileItemTitle">{ title }</span>
      <span className="ProfileItemDesc">{ desc }</span>
      <input className="homeAddressInput" placeholder={desc} />
    </div>
  );
};
