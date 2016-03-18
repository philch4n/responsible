// This function will dispatch action to change to Settings View
function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function CancelRideButton({
  onCancel = nullFn,
}) {
  return (
    <div className='CancelRideButton two columns' onClick={onCancel}>
      <button className='CancelRideButton btn u-full-width' type='button'>Cancel</button>
    </div>
  );
}
