export function ProfileInfoItem({ profileItemTitle, profileItemDesc, onClick = () => {} }) {
  return (
    <div className="ProfileInfoItem">
      <span className="ProfileInfoItemTitle">{ profileItemTitle }</span>
      <span className="ProfileInfoItemDesc" onClick={ onClick }>{ profileItemDesc }</span>
    </div>
  );
};
