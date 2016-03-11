require('../public/styles/skeleton.css');
require('../public/styles/normalize.css');

/* This function will dispatch an action to change to Rider mode */
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function ConfirmRideButton({
  onConfirmLocationButtonClick = nullFn,
}) {
  return (
    <div className='ConfirmRide' onClick={onConfirmLocationButtonClick}>
      <button className='ConfirmRideButton btn u-full-width' type='button'>Confirm Ride!</button>
    </div>
  );
}
