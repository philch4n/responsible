// require('../../public/styles/skeleton.css');
// require('../../public/styles/normalize.css');

/* This function will dispatch an action to change to Rider mode */
function nullFn(e) { console.log('you clickededed me ' + e.target.className); };

export function ConfirmLocationButton({
  onConfirmLocationButtonClick = nullFn,
}) {
  return (
    <div className='ConfirmLocation' onClick={onConfirmLocationButtonClick}>
      <button
        className='ConfirmLocationButton btn u-full-width'
        type='button'>
        Confirm Ride!
      </button>
    </div>
  );
}
