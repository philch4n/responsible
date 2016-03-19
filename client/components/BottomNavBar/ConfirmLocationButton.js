require('../../public/styles/styles.css');

export function ConfirmLocationButton({
  confirmLocation,
}) {
  return (
    <div className='ConfirmLocation' onClick={confirmLocation}>
      <button
        className='ConfirmLocationButton' type='button'>
        Confirm Ride!
      </button>
    </div>
  );
}
