require('../../public/styles/skeleton.css');
require('../../public/styles/normalize.css');

export function ConfirmLocationButton({
  confirmLocation = nullFn,
}) {
  return (
    <div className='ConfirmLocation' onClick={confirmLocation}>
      <button
        className='ConfirmLocationButton btn u-full-width'
        type='button'>
        Confirm Ride!
      </button>
    </div>
  );
}
