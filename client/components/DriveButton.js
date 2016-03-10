require('../public/styles/skeleton.css');
require('../public/styles/normalize.css');

export function DriveButton({ onMiddleButtonClick, }) {
  return (
    <div className='DriveDiv eight columns' onClick={onMiddleButtonClick}>
      <button className='DriveButton btn u-full-width' type='button'>Drive!</button>
    </div>
  );
}
