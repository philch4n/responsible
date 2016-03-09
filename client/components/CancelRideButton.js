
// This function will dispatch action to change to Settings View
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function CancelRideButton({
  onCancelRideButtonClick = nullFn,
}) {
  return (
    <div className='CancelRideButton' onClick={onCancelRideButtonClick}>
      <button className='CancelRideButton btn' type='button'>Cancel</button>
    </div>
  );
}
