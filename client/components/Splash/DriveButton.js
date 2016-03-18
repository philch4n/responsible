/* This function will dispatch an action to change to Driver mode */
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function DriveButton({
  onDriveButtonClick = nullFn,
}) {
  return (
    <div className='DriveDiv' onClick={onDriveButtonClick}>
      <button className='DriveButton column is-half is-offset-quarter button is-success is-large'>
      Drive
      </button>
    </div>
  );
}
