/* This function will dispatch an action to change to Driver mode */
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function DriveButton({
  onDriveClick = nullFn,
}) {
  return (
    <div className='DriveDiv' onClick={onDriveClick}>
      <button className='DriveButton btn u-full-width' type='button'>Drive!</button>
    </div>
  );
}
