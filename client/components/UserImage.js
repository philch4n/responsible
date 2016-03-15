export function UserImage({ avatar, imageType }) {
  return (
    <div className="avatar">
    {
      imageType === 'portrait' ?
        <img className="userPortrait" src={ avatar /*  portrait size */ } /> :
        <span><img className="userIcon" src={ avatar /*  icon size  */ } /></span>
    }
    </div>
  );
}
