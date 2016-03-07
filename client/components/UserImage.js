
export function UserImage({ userImage, imageType }) {
  return (
    <div className="userImage">
    {
      imageType === 'portrait' ?
        <img className="userPortrait" src={ userImage /*  portrait size */ } /> :
        <img className="userIcon" src={ userImage /*  icon size  */ } />
    }
    </div>
  );
};
