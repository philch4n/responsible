export function DriveButton({ onMiddleButtonClick, }) {
  return (
    <div className='DriveButton' onClick={onMiddleButtonClick}>
      <button className='DriveButton btn' type='button'>Drive!</button>
    </div>
  );
}
